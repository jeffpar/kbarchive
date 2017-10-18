---
layout: page
title: "Q61285: Global Lock Count Changes in Windows 3.x"
permalink: kb/061/Q61285/
---

## Q61285: Global Lock Count Changes in Windows 3.x

	Article: Q61285
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The global lock count mechanism has been changed in the Windows version 3.x
	protected modes (that is, standard mode and enhanced mode). The GlobalLock
	function only affects the lock count of discardable objects and the default data
	segment (DGROUP); movable objects are not affected. Thus, repeated calling of
	GlobalLock() and GlobalFlags() on a GMEM_MOVEABLE object does not show any
	changes to its lock count.
	
	MORE INFORMATION
	================
	
	The following are reasons and explanations concerning this design change:
	
	1. In real mode, GlobalLock() fixes the segment:offset of a global memory
	  object. It also increases the lock count, as reported by GlobalFlags().
	
	2. In protected mode, the far pointer returned by GlobalLock() is a
	  selector:offset, not a segment:offset. Because the selector value does not
	  change, GlobalLock() does not actually fix the memory object in the physical
	  address space. Thus, the GlobalLock function in protected mode does not
	  change the lock count, unless the object is discardable or is a default data
	  segment.
	
	  In the case of a discardable object, the lock count is meaningful, because
	  Windows needs to know when the object can be discarded (which is when its
	  lock count is zero).
	
	3. However, some applications have used the GlobalLock() lock count as a
	  "reference count" [that is, as an indication of how many times GlobalLock()
	  was called]. If the lock count for an object goes to zero, these applications
	  might consider the object a candidate for being manually discarded, perhaps
	  after copying the data to disk.
	
	  Unfortunately, this use of GlobalLock() as a reference count keeper does not
	  work in protected mode. Applications that symmetrically pair calls to
	  GlobalLock() with calls to GlobalUnlock() do not need to know the lock count,
	  and therefore, are unaffected by this change in behavior.
	
	4. How does an application keep track of reference counts now, given that the
	  GlobalLock() approach does not work for nondiscardable objects in protected
	  mode? The application should really keep track of reference counts itself,
	  which should not be hard to do because the application in need of this
	  functionality will have a table of global handles anyway.
	
	  However, if the application cannot be modified to maintain its own reference
	  counts, then there is a new Windows function, called GlobalFix(), that will
	  accomplish this functionality. GlobalFix() performs the following
	  functionality:
	
	  a. It fixes the object in the protected mode linear space.
	
	  b. It increments the "lock count", as returned by the GlobalFlags function.
	
	5. The following includes more information about GlobalFlags(). In real mode, it
	  returns the GlobalLock() lock count. In protected mode, if the object is
	  discardable, GlobalFlags() also returns the GlobalLock() lock count. In
	  protected mode, if the object is nondiscardable, GlobalFlags() returns the
	  GlobalFix() reference count. In other words, GlobalFlags() always returns the
	  lock/fix count. However, in protected mode, the GlobalLock() and
	  GlobalUnLock() APIs do not affect the count, only the GlobalFix() and
	  GlobalUnFix() APIs do.
	
	  NOTE: In real mode, the GlobalFlags() lock count actually indicates the sum of
	  GlobalLock()'s and GlobalFix()'es. Therefore, if the programmer is calling
	  GlobalLock() and GlobalFix() in pairs, then the GlobalFlags() lock count
	  actually is twice the logical reference count, if in real mode.
	
	6. If the application needs to keep track of reference counts, and the
	  programmer wants Windows to do the work for them, then the programmer must
	  accompany every call to GlobalLock() with a call to GlobalFix(). This way the
	  programmer will be able to depend on the validity of the GlobalFlag()
	  lock/reference count. However, using the GlobalFix() API just to keep track
	  of the reference count is overkill, if that is all the programmer wants it to
	  do. Remember, GlobalFix() also fixes the object in the protected mode linear
	  address space. The price the programmer pays for having Windows keep track of
	  the reference count (by using the GlobalFix()) is the following:
	
	  a. Every time the GlobalLock() or GlobalUnLock() API is called, the
	     programmer must also call either the GlobalFix() or GlobalUnFix().
	
	  And, much worse:
	
	  b. The programmer establishes sandbars in the linear address space.
	
	  An application should either keep track of reference counts on its own or
	  always pair GlobalLock() calls with matching GlobalUnlock() calls; the use of
	  the GlobalFix() API should be avoided.
	
	  Very few applications should need to fix global objects in linear space;
	  therefore, few applications should need to use the GlobalFix function.
	
	7. If the programmer needs to unconditionally unlock and free a global memory
	  object of any type, then code similar to the following can be used:
	
	          /* 1.  Make it discardable if necessary. */ 
	          if (GlobalFlags shows that it is nondiscardable)
	              GlobalRealloc (GMEM_MODIFY it to be discardable);
	
	          /* 2. Remove any lock counts that might be on it. */ 
	          while (GlobalUnlock != 0) /* keep unlocking it */ 
	              ;
	
	          /* 3. Free it. */ 
	
	  GlobalFree()
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
