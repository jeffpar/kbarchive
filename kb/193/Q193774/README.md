---
layout: page
title: "Q193774: HOWTO: Change a Drive's Volume Label Programmatically"
permalink: /kb/193/Q193774/
---

## Q193774: HOWTO: Change a Drive's Volume Label Programmatically

{% raw %}

	Article: Q193774
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A drive's volume label can be changed using the Windows API function
	SetVolumeLabel().
	
	MORE INFORMATION
	================
	
	The following example demonstrates the use of the SetVolumeLabel() API function
	to change the volume label of a floppy disk.
	
	Sample Code
	-----------
	
	     DECLARE INTEGER SetVolumeLabel IN Win32API STRING lcRootPath,;
	        STRING lcVolumeLabel
	
	     liRetVal = 0
	     * Message box with OK/Cancel buttons
	     liRetVal = MESSAGEBOX("Insert scratch floppy disk in drive A:",;
	        1)
	
	     * Handle non-OK selection from message box
	     IF liRetVal # 1
	        RETURN
	     ENDIF
	
	     lcVolumeLabel = "Test"
	     = SetVolumeLabel ("A:\", lcVolumeLabel)
	
	You can examine the drive label by right-clicking the drive in Explorer and
	selecting Properties. The volume label is located near the top of the General
	tab on the Property page.
	
	Additional query words: kbVFp600 kbAPI kbVFp500a kbVFp500 kbVFp300b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
