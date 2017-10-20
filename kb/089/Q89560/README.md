---
layout: page
title: "Q89560: Creating Dynamic Code Segments Using PrestoChangoSelector"
permalink: /kb/089/Q89560/
---

## Q89560: Creating Dynamic Code Segments Using PrestoChangoSelector

{% raw %}

	Article: Q89560
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
	
	Some problems arise when an application for the Microsoft Windows graphical
	environment uses a segment addressed by a selector that is not allocated by the
	Windows kernel. This article describes the correct method of building selectors
	at run time. While the text below describes the problems that arise when an
	application calls the PrestoChangoSelector() function to alias a selector, it
	does not discuss other difficulties involved in building a code segment at run
	time. Note that the techniques in this article are specific to the current
	implementation of 16-bit Windows.
	
	Note that version 3.0 of the Windows Software Development Kit (SDK) "Reference:
	Volume 1" manual refers to the PrestoChangoSelector() function as the
	ChangeSelector() function.
	
	MORE INFORMATION
	================
	
	If a callback function, for example, a window procedure, is located in a dynamic
	code segment, the Windows user module encounters some problems when any
	application exits because the selector for the segment was not allocated by the
	kernel. To work around this problem, the application must save the original
	selector used to access the segment [obtained from the AllocSelector() function]
	and use the original selector to execute the code in the segment [using
	PrestoChangoSelector()]. The code fragment below demonstrates this technique.
	Note that DATA_SELECTOR is a selector obtained from the GlobalAlloc() function.
	
	     WORD wCopyOfDataSelector;
	     WORD wSelectorToCode;
	
	     // When an application calls AllocSelector() with a valid selector,
	     // the function copies the information associated with the selector
	     // to a new location in the descriptor table used by Windows and
	     // returns the new location. In the code below, wCopyOfDataSelector
	     // is a second entry in the descriptor table that points to a
	     // globally allocated block of memory.
	
	     if ((wCopyOfDataSelector = AllocSelector(DATA_SELECTOR)))
	        {
	        // PrestoChangoSelector() toggles the bit in the descriptor table
	        // that indicates whether the associated block of memory is code
	        // or data. Therefore, in the code below, wSelectorToCode is a
	        // code selector to the wCopyOfDataSelector (and DATA_SELECTOR)
	        // block of memory.
	        if ((wSelectorToCode = PrestoChangoSelector(DATA_SELECTOR,
	                                                    DATA_SELECTOR)))
	           {
	           // Call code through wSelectorToCode
	           // Read or write using wCopyOfDataSelector
	
	           return TRUE; // Everything worked!
	           }
	        else
	           return FALSE; // Changing the selector failed
	        }
	     else
	        return FALSE;    // Unable to allocate selector
	
	     // Be sure to free the allocated selector before the application
	     // terminates.
	     if (FreeSelector(wCopyOfDataSelector))
	        return FALSE;  // Selector not freed
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
