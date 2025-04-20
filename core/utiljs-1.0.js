/**
 * Vector2 Class
 */
class Vec2 {
    /**
     * Creates the Vector2
     * @param {Number} [x=0]
     * @param {Number} [y=0] 
     * @returns
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * Adds two Vectors.
     * @param {Vec2} vec 
     * @returns 
     */
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    /**
     * Subtracts two Vectors.
     * @param {Vec2} vec
     * @returns 
     */
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    /**
     * Multiplies by a scalar
     * @param {Number} scalar 
     * @returns
     */
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * Sets the Vec2
     * @param {Number} x 
     * @param {Number} y 
     * @returns
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * Calculates the Vec2 magnitude
     * @returns 
     */
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Normalizes the Vec2
     * @returns
     */
    normalize() {
        const mag = this.magnitude();
        if (mag > 0) {
            this.x /= mag;
            this.y /= mag;
        }
        return this;
    }

    /**
     * Checks if two Vectors are equal
     * @param {Vec2} vec 
     * @returns 
     */
    equals(vec) {
        return this.x === vec.x && this.y === vec.y;
    }
}

/**
 * Vec3 Class
 */
class Vec3 {
    /**
     * Creates the Vector3
     * @param {Number} [x=0] 
     * @param {Number} [y=0] 
     * @param {Number} [z=0] 
     * @returns
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Adds two Vectors.
     * @param {Vec3} vec
     * @returns 
     */
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }

    /**
     * Subtracts two Vectors.
     * @param {Vec3} vec
     * @returns
     */
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }

    /**
     * Multiplies by a scalar
     * @param {Number} scalar 
     * @returns
     */
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }

    /**
     * Sets the Vec3
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @returns
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Calculates the Vec3 magnitude
     * @returns 
     */
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Normalizes the Vec3
     * @returns
     */
    normalize() {
        const mag = this.magnitude();
        if (mag > 0) {
            this.x /= mag;
            this.y /= mag;
            this.z /= mag;
        }
        return this;
    }

    /**
     * Dots two Vectors
     * @param {Vec3} vec 
     */
    dot(vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }

    /**
     * Cross two Vectors
     * @param {Vec3} vec
     * @returns
     */
    cross(vec) {
        return new Vec3(
            this.y * vec.z - this.z * vec.y,
            this.z * vec.x - this.x * vec.z,
            this.x * vec.y - this.y * vec.x
        );
    }

    /**
     * Clones the Vec3
     * @returns 
     */
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }

    /**
     * Checks if two Vectors are equal
     * @param {Vec3} vec 
     * @returns 
     */
    equals(vec) {
        return this.x === vec.x && this.y === vec.y && this.z === vec.z;
    }
}

/**
 * Vec4 Class
 */
class Vec4 {
    /**
     * Creates the Vector4
     * @param {Number} [x=0]
     * @param {Number} [y=0]
     * @param {Number} [z=0]
     * @param {Number} [w=0]
     * @returns
     */
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }

    /**
     * Adds two Vectors
     * @param {Vec4} vec 
     * @returns
     */
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        this.w += vec.w;
        return this;
    }


    /**
     * Subtracts two Vectors
     * @param {Vec4} vec 
     * @returns
     */
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        this.w -= vec.w;
        return this;
    }

    /**
     * Multiplies by a scalar
     * @param {Number} scalar 
     * @returns
     */
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;
        return this;
    }

    /**
     * Sets the Vec4
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @param {Number} w 
     * @returns
     */
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }

    /**
     * Calculates the Vec4 magnitude
     * @returns 
     */
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Normalizes the Vec4
     * @returns
     */
    normalize() {
        const mag = this.magnitude();
        if (mag > 0) {
            this.x /= mag;
            this.y /= mag;
            this.z /= mag;
            this.w /= mag;
        }
        return this;
    }

    /**
     * Checks if two Vectors are equal
     * @param {Vec4} vec 
     * @returns 
     */
    equals(vec) {
        return this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w == vec.w;
    }    
}

/**
 * Color Class
 */
class Color {
    /**
     * Creates a RGBA Color
     * @param {Number} [r=0]
     * @param {Number} [g=0]
     * @param {Number} [b=0]
     * @param {Number} [a=0]
     * @returns 
     */
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }

    /**
     * Sets the color from a hexadecimal string
     * @param {String} hex 
     * @returns
     */
    fromHex(hex) {
        hex = hex.replace("#", "");
        this.r = parseInt(hex.substr(0, 2), 16) / 255;
        this.g = parseInt(hex.substr(2, 2), 16) / 255;
        this.b = parseInt(hex.substr(4, 2), 16) / 255;
        this.a = 1;
        return this;
    }

    /**
     * Returns the color in RGBA format.
     * @returns
     */
    toRGBA() {
        return `rgba(${Math.round(this.r * 255)}, ${Math.round(this.g * 255)}, ${Math.round(this.b * 255)}, ${this.a})`;
    }

    /**
     * Returns the color in hexadecimal format.
     * @returns
     */
    toHex() {
        return `#${((1 << 24) | (Math.round(this.r * 255) << 16) | (Math.round(this.g * 255) << 8) | Math.round(this.b * 255)).toString(16).slice(1).toUpperCase()}`;
    }

    /**
     * Blends the colors
     * @param {Color} color 
     * @param {Number} ratio 
     * @returns
     */
    blend(color, ratio = 0.5) {
        this.r = this.r * (1 - ratio) + color.r * ratio;
        this.g = this.g * (1 - ratio) + color.g * ratio;
        this.b = this.b * (1 - ratio) + color.b * ratio;
        this.a = this.a * (1 - ratio) + color.a * ratio;
        return this;
    }
}

class Matrix4 {
    /**
     * Creates a new identity matrix
     */
    constructor() {
        this.elements = new Float32Array(16);
        this.identity();
    }
  
    /** 
     * Sets the matrix to the identity matrix 
     */
    identity() {
        const e = this.elements;
        e.fill(0);
        e[0] = e[5] = e[10] = e[15] = 1;
        return this;
    }
  
    /** 
     * Multiplies the matrix by another Matrix4
     * @param {Matrix4} matrix
     */
    multiply(matrix) {
        const a = this.elements;
        const b = matrix.elements;
        const result = new Float32Array(16);
  
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                let sum = 0;
                for (let i = 0; i < 4; i++) {
                    sum += a[i + row * 4] * b[col + i * 4];
                }
                result[col + row * 4] = sum;
            }
        }
  
        this.elements = result;
        return this;
    }
  
    /** 
     * Sets the matrix to a translation matrix 
     */
    setTranslation(x, y, z) {
        this.identity();
        this.elements[12] = x;
        this.elements[13] = y;
        this.elements[14] = z;
        return this;
    }
}

class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
  
    /** Sets the quaternion from axis and angle (in radians) */
    setFromAxisAngle(axis, angle) {
      const half = angle / 2;
      const s = Math.sin(half);
      this.x = axis.x * s;
      this.y = axis.y * s;
      this.z = axis.z * s;
      this.w = Math.cos(half);
      return this;
    }
  
    /** Multiplies this quaternion by another */
    multiply(q) {
        const ax = this.x, ay = this.y, az = this.z, aw = this.w;
        const bx = q.x, by = q.y, bz = q.z, bw = q.w;
  
        this.x = ax * bw + aw * bx + ay * bz - az * by;
        this.y = ay * bw + aw * by + az * bx - ax * bz;
        this.z = az * bw + aw * bz + ax * by - ay * bx;
        this.w = aw * bw - ax * bx - ay * by - az * bz;
        return this;
    }
  
    /** Normalizes the quaternion */
    normalize() {
        const len = Math.hypot(this.x, this.y, this.z, this.w);
        if (len > 0) {
            this.x /= len;
            this.y /= len;
            this.z /= len;
            this.w /= len;
        }
        return this;
    }
}

class BoundingBox {
    constructor(min = new Vec3(Infinity, Infinity, Infinity), max = new Vec3(-Infinity, -Infinity, -Infinity)) {
        this.min = min;
        this.max = max;
    }
  
    /** Expands the bounding box to include a point */
    expand(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
        return this;
    }
  
    /** Returns true if this bounding box intersects another */
    intersects(box) {
        return !(
            this.max.x < box.min.x || this.min.x > box.max.x ||
            this.max.y < box.min.y || this.min.y > box.max.y ||
            this.max.z < box.min.z || this.min.z > box.max.z
        );
    }
  
    /** Returns true if the point is inside the bounding box */
    contains(point) {
        return (
            point.x >= this.min.x && point.x <= this.max.x &&
            point.y >= this.min.y && point.y <= this.max.y &&
            point.z >= this.min.z && point.z <= this.max.z
        );
    }
  
    /** Translates the bounding box by a vector */
    translate(offset) {
        this.min = this.min.add(offset);
        this.max = this.max.add(offset);
        return this;
    }
  
    /** Returns the center point of the bounding box */
    getCenter() {
        return new Vec3(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            (this.min.z + this.max.z) / 2
        );
    }
  
    /** Returns the size of the bounding box as a Vec3 */
    getSize() {
        return new Vec3(
            this.max.x - this.min.x,
            this.max.y - this.min.y,
            this.max.z - this.min.z
        );
    }
  
    /** Clones the bounding box */
    clone() {
        return new BoundingBox(this.min.clone(), this.max.clone());
    }
  
    /** Resets the bounding box to infinite min/max values */
    reset() {
        this.min = new Vec3(Infinity, Infinity, Infinity);
        this.max = new Vec3(-Infinity, -Infinity, -Infinity);
        return this;
    }

    /**
     * Checks if two BoundingBoxes are equal
     * @param {BoundingBox} bbox 
     * @returns 
     */
    equals(bbox) {
        return this.min.equals(bbox.min) && this.max.equals(bbox.max);
    }    
}

class BoundingBox2D {
    constructor(min = new Vec2(Infinity, Infinity), max = new Vec2(-Infinity, -Infinity)) {
        this.min = min;
        this.max = max;
    }
  
    /** Expands the bounding box to include a 2D point */
    expand(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        return this;
    }
  
    /** Returns true if this bounding box intersects another 2D bounding box */
    intersects(box) {
        return !(
            this.max.x < box.min.x || this.min.x > box.max.x ||
            this.max.y < box.min.y || this.min.y > box.max.y
        );
    }
  
    /** Returns true if the point is inside the 2D bounding box */
    contains(point) {
        return (
            point.x >= this.min.x && point.x <= this.max.x &&
            point.y >= this.min.y && point.y <= this.max.y
        );
    }
  
    /** Translates the bounding box by a 2D vector */
    translate(offset) {
        this.min = this.min.add(offset);
        this.max = this.max.add(offset);
        return this;
    }
  
    /** Returns the center point of the bounding box */
    getCenter() {
        return new Vec2(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2
        );
    }
  
    /** Returns the size of the bounding box as a Vec2 */
    getSize() {
        return new Vec2(
            this.max.x - this.min.x,
            this.max.y - this.min.y
        );
    }
  
    /** Clones the 2D bounding box */
    clone() {
        return new BoundingBox2D(this.min.clone(), this.max.clone());
    }
  
    /** Resets the bounding box to infinite min/max values */
    reset() {
        this.min = new Vec2(Infinity, Infinity);
        this.max = new Vec2(-Infinity, -Infinity);
        return this;
    }
}

class Ray2D {
    constructor(origin = new Vec2(), direction = new Vec2(1, 0)) {
        this.origin = origin;
        this.direction = direction.normalize();
    }
  
    /** Gets a point along the ray at a given distance (t) */
    getPoint(t) {
        return new Vec2(
            this.origin.x + this.direction.x * t,
            this.origin.y + this.direction.y * t
        );
    }
  
    /** Returns true if this ray intersects a 2D bounding box */
    intersectsBox(box) {
        let tmin = (box.min.x - this.origin.x) / this.direction.x;
        let tmax = (box.max.x - this.origin.x) / this.direction.x;
  
        if (tmin > tmax) [tmin, tmax] = [tmax, tmin];
  
        let tymin = (box.min.y - this.origin.y) / this.direction.y;
        let tymax = (box.max.y - this.origin.y) / this.direction.y;
  
        if (tymin > tymax) [tymin, tymax] = [tymax, tymin];
  
        if ((tmin > tymax) || (tymin > tmax)) return false;
  
        return true;
    }
}

class PhysicsBody {
    constructor(position = new Vec2(), size = new Vec2(1, 1), mass = 1) {
        this.position = position;
        this.velocity = new Vec2();
        this.acceleration = new Vec2();
        this.size = size;
        this.mass = mass;
        this.friction = 0.98;
        this.gravity = new Vec2(0, 9.8);
        this.bbox = new BoundingBox2D();
        this.updateBoundingBox();
    }
  
    /** Applies a force to the body */
    applyForce(force) {
        const f = force.clone().divideScalar(this.mass);
        this.acceleration = this.acceleration.add(f);
    }
  
    /** Updates the physics step (deltaTime in seconds) */
    update(deltaTime) {
        this.velocity = this.velocity.add(this.acceleration.multiplyScalar(deltaTime));
        this.velocity = this.velocity.multiplyScalar(this.friction);
        this.position = this.position.add(this.velocity.multiplyScalar(deltaTime));
        this.acceleration = new Vec2();
        this.updateBoundingBox();
    }
  
    /** Updates the bounding box to match the body's position and size */
    updateBoundingBox() {
        const half = this.size.multiplyScalar(0.5);
        this.bbox.min = this.position.subtract(half);
        this.bbox.max = this.position.add(half);
    }
}

/**
 * Leps between two Vec3.
 * @param {Vec3} v1 Initial Vector.
 * @param {Vec3} v2 Final Vector.
 * @param {number} t Value between 0 and 1
 * @returns {Vec3} Result
 */
function lerpVec3(v1, v2, t) {
    return new Vec3(
        v1.x + (v2.x - v1.x) * t,
        v1.y + (v2.y - v1.y) * t,
        v1.z + (v2.z - v1.z) * t
    );
}

/**
 * Leps between two Colors.
 * @param {Color} c1 Initial Color.
 * @param {Color} c2 Final Color.
 * @param {number} t Value between 0 and 1
 * @returns {Color} Result
 */
function lerpColor(c1, c2, t) {
    return new Color(
        c1.r + (c2.r - c1.r) * t,
        c1.g + (c2.g - c1.g) * t,
        c1.b + (c2.b - c1.b) * t,
        c1.a + (c2.a - c1.a) * t
    );
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
  
function distance3D(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
}

function isConsole() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /PlayStation|Wii|Nintendo|Xbox/i.test(userAgent);
}

function isPC() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /Windows|Macintosh|Linux|X11/i.test(userAgent);
}

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function getMousePosition(event) {
    return {
        x: event.clientX,
        y: event.clientY
    };
}

function isNumber(value) {
    return !isNaN(value) && isFinite(value);
}

function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const isArray = (value) => Array.isArray(value);
const getAverage = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;
const formatDecimal = (number, decimals) => number.toFixed(decimals);
const roundUp = (number) => Math.ceil(number);
const roundDown = (number) => Math.floor(number);
const startsWith = (str, substring) => str.startsWith(substring);
const endsWith = (str, substring) => str.endsWith(substring);
const cleanString = (str) => str.replace(/\s+/g, ' ').trim();
const getDataType = (value) => Object.prototype.toString.call(value).slice(8, -1);
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const formatJson = (obj) => JSON.stringify(obj, null, 2);
const removeDuplicates = (arr) => [...new Set(arr)];
const getKeyByValue = (obj, value) => {
    return Object.keys(obj).filter(key => obj[key] === value);
}

const UtilJS = {
    PhysicsBody, Ray2D, BoundingBox2D,
    BoundingBox3D: BoundingBox, Quaternion, Matrix4,
    Color, Vec4, Vec3,
    Vec2, lerpVec3, lerpColor,
    clamp, distance2D: distance, distance3D,
    generateUUID, sleep, isValidEmail,
    isMobile, isConsole, isPC,
    getMousePosition, isNumber, smoothScrollTo,
    supportsLocalStorage, isEmptyObject, isArray,
    getAverage, formatDecimal, getKeyByValue,
    roundUp, roundDown, startsWith,
    endsWith, cleanString, getDataType,
    mergeObjects, formatJson, removeDuplicates
};

UtilJS.debug = {
    /**
     * Draws a 2D vector from origin
     */
    drawVector(ctx, origin, vec, color = "blue") {
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(origin.x + vec.x, origin.y + vec.y);
        ctx.strokeStyle = color;
        ctx.stroke();
    },
  
    /**
     * Draws a 2D bounding box
     */
    drawBoundingBox2D(ctx, box, color = "red") {
        const size = box.getSize();
        ctx.strokeStyle = color;
        ctx.strokeRect(box.min.x, box.min.y, size.x, size.y);
    },
  
    /**
     * Draws a 2D ray
     */
    drawRay2D(ctx, ray, length = 1000, color = "orange") {
        const end = ray.getPoint(length);
        ctx.beginPath();
        ctx.moveTo(ray.origin.x, ray.origin.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = color;
        ctx.stroke();
    },
  
    /**
     * Draws a polygon (array of Vec2)
     */
    drawPolygon(ctx, polygon, color = "green", close = true) {
        if (polygon.points.length < 2) return;
  
        ctx.beginPath();
        ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
        for (let i = 1; i < polygon.points.length; i++) {
            ctx.lineTo(polygon.points[i].x, polygon.points[i].y);
        }
        if (close) ctx.closePath();
        ctx.strokeStyle = color;
        ctx.stroke();
    },
  
    /**
     * Draws the bounding box of a physics body
     */
    drawPhysicsBody(ctx, body, color = "purple") {
        this.drawBoundingBox2D(ctx, body.bbox, color);
    },
  
    /**
     * Draws a single point
     */
    drawPoint(ctx, point, radius = 3, color = "black") {
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
};

window.UtilJS=UtilJS; // exporting
