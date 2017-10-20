---
layout: page
title: "Q151030: PRB: Data Corruption with LBS_SORT and CCheckListBox on Win32s"
permalink: /kb/151/Q151030/
---

## Q151030: PRB: Data Corruption with LBS_SORT and CCheckListBox on Win32s

{% raw %}

	Article: Q151030
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbCtrl kbListBox kbMFC kbVC200 kbVC400 kbVC410 kbOSWin32s kbHWx86 kbGrpDSMF
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1, on platform(s):
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A CCheckListBox with the LBS_SORT style incorrectly copies the item data.
	Different strings in the listbox point to the same item data object. In debug
	mode using Visual C++ 4.0 and 4.1, this behavior will ASSERT in DBGHEAP.C as
	_free_dbg() is called on the same memory block multiple times.
	
	This is only a problem in Win32s.
	
	CAUSE
	=====
	
	This is a problem in Win32s with owner-draw listboxes that have the
	LBS_HASSTRINGS and LBS_SORT listbox styles. CCheckListBox is an owner-draw
	listbox that uses LBS_OWNERDRAWFIXED or LBS_OWNERDRAWVARIABLE with
	LBS_HASSTRINGS. CCheckListBox uses the item data to maintain the check state
	information for each item.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, avoid the LBS_SORT style or use InsertString()
	instead of AddString(). InsertString() does not cause a LBS_SORT list to be
	sorted.
	
	If the listbox needs to be sorted, the strings should be sorted before being
	added to the listbox or the strings should be inserted in order.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 CListBox list box
	
	======================================================================
	Keywords          : kbnokeyword kbCtrl kbListBox kbMFC kbVC200 kbVC400 kbVC410 kbOSWin32s kbHWx86 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
