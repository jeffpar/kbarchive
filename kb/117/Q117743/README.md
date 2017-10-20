---
layout: page
title: "Q117743: How to Move Data Between Large Overlapping Buffers"
permalink: /kb/117/Q117743/
---

## Q117743: How to Move Data Between Large Overlapping Buffers

{% raw %}

	Article: Q117743
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Programmers often need to move large amounts of data between buffers in their
	applications. The Microsoft Windows version 3.1 API and the Microsoft C Run Time
	library provide several functions to let you copy and move data between buffers.
	However, none of these functions guarantees that data larger than 64K can be
	moved safely between buffers that overlap. This article lists a C function based
	on the hmemcpy() Windows version 3.1 function to accomplish this job.
	
	MORE INFORMATION
	================
	
	For example, the functions hmemcpy() and MemoryWrite() handle buffers greater
	than 64K, but do not guarantee that data can be safely moved between overlapping
	buffers. The function _fmemmove() guarantees that data can be safely moved
	between overlapping buffers, but does not handle more than 64K.
	
	Below is a C function that provides that functionality. It recognizes and covers
	the four cases that arise while moving data. The four cases are:
	
	- The source and the destination are identical.
	
	-or-
	
	- The source and the destination do not overlap.
	
	-or-
	
	- The source and the destination overlap and the source starts at a location
	  before the destination in the address space.
	
	-or-
	
	- The source and the destination overlap and the source starts at a location
	  after the destination in the address space.
	
	Cases 1 and 2 are easy to handle, as seen in the sample code below. In cases 3
	and 4, the address space must be divided into smaller units so that the data can
	be moved in small chunks, thus better ensuring the integrity of the data. In the
	best case, cases 3 and 4 require only two calls to hmemcpy(). In the worst case,
	cases 3 and 4 require "len" number of calls to hmemcpy(), where len is the
	number of bytes to move.
	
	The interface to SafeCopy() is identical to that of hmemcpy().
	
	     void SafeCopy(void _huge *d, void _huge *s, long len)
	     {
	          register long i;
	          long safesize, times;
	
	          // There are four cases to consider
	          // case 1: source and destination are the same
	          // case 2: source and destination do not overlap
	          // case 3: source starts at a location before destination in
	          //         linear memory
	          // case 4: source starts at a location after destination in
	          //         linear memory
	
	          // detect case 1 and handle it
	          if (d == s)
	               return;
	
	          // determine the amount of overlap
	          if (d > s)     // get the absolute difference
	               safesize = ((unsigned long)d - (unsigned long)s);
	          else
	               safesize = ((unsigned long)s - (unsigned long)d);
	
	          // detect case 2
	          if (safesize >= len)
	          {
	               hmemcpy(d, s, len);  // no overlap
	               return;
	          }
	
	          times = len/safesize;
	
	          // detect case 3 and handle it
	          if ((s < d) && ((unsigned long)s+len-1) >(unsigned long)d)
	          {
	               // copy bytes from the end of source to the end of
	               // destination in safesize quantum.
	               for (i = 1; i <= times; i++)
	                    hmemcpy((void _huge *)((unsigned long) d+len-i*safesize),
	                            (void _huge *)((unsigned long)s+len-i*safesize),
	                             safesize);
	
	               // copy the bytes remaining to be copied after
	               // times*safesize bytes have been copied.
	               if (times*safesize < len)
	                    hmemcpy(d, s, len - times*safesize);
	
	          }
	          else // this is case 4. handle it
	          {
	               // ASSERT (s > d) && ((d+len-1) > s))
	
	               // copy bytes from the beginning of source to the
	               // beginning of destination in safesize quantum
	               for (i = 0; i <times; i++)
	                    hmemcpy((void _huge *)((unsigned long)d+i*safesize),
	                            (void _huge *)((unsigned long)s+i*safesize),
	                            safesize);
	
	               // copy the bytes remaining to be copied after
	               // times*safesize bytes have been copied.
	               if (times*safesize < len)
	                    hmemcpy((void _huge*)((unsigned long)d+times*safesize),
	                            (void _huge*)((unsigned long)s+times*safesize),
	                            len - times*safesize);
	          }
	
	          return;
	     }
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
