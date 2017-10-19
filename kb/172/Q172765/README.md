---
layout: page
title: "Q172765: WD97: ErrMsg: The Wrong Wwintl32.dll Has Been Loaded"
permalink: /kb/172/Q172765/
---

## Q172765: WD97: ErrMsg: The Wrong Wwintl32.dll Has Been Loaded

	Article: Q172765
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbdta word97kbfaq
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Word after you have run the Microsoft Office
	97 Service Release 1 (SR-1) Patch, you may receive the following error message:
	
	  The wrong WWINTL32.DLL has been loaded.
	
	CAUSE
	=====
	
	This error message occurs when the versions of the Winword.exe file and the
	Wwintl32.dll file are not the same.
	
	NOTE: It is not sufficient to check the file version information that is
	displayed when you right-click the program icon and click Properties on the
	shortcut menu.
	
	This problem may also occur if a wwintl32.dll file is located in the
	Windows\System directory.
	
	WORKAROUND
	==========
	
	
	To work around this problem, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel. Click
	  Add/Remove Programs.
	
	2. Select Microsoft Office and click Change (in Microsoft Windows 2000) or click
	  Add/Remove (in Microsoft Windows 95 or Microsoft Windows 98).
	
	3. When prompted to put in the Office CD, do so, and then click OK.
	
	4. Click Add/Remove. Click to clear Microsoft Word.
	
	  This will remove Microsoft Word only.
	
	5. Click OK on the message that you have selected XXX components to remove.
	
	6. Using Windows Explorer, search for and manually delete any instances of
	  WINWORD.EXE.
	
	7. Search for and delete any instances of the Wwintl32.dll file located in a
	  folder other than the \Office folder.
	
	8. Disable all terminate-and-stay-resident programs (TSRs), virus checkers, or
	  utility programs such as Clean Sweep or First Aid.
	
	9. Reinstall Microsoft Word 97 from the original media.
	
	10. If the system restarts successfully, ensure that all TSRs in are still
	  disabled, and reinstall the patch.
	
	If the preceding steps do not work, you may need to completely remove Office. To
	do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Click Add/Remove Programs.
	
	3. Select Microsoft Office and click Change (in Microsoft Windows 2000) or click
	  Add/Remove (in Microsoft Windows 95 or Microsoft Windows 98).
	
	4. When prompted to put in the Office CD, do so and then click OK.
	
	5. Click Remove All.
	
	6. Using Windows Explorer, search for and manually delete any instances of
	  WINWORD.EXE.
	
	7. Search for and delete any instances of the Wwintl32.dll file located in a
	  folder other than the \Office folder.
	
	8. Disable all terminate-and-stay-resident programs (TSRs), virus checkers, or
	  utility programs such as Clean Sweep or First Aid.
	
	9. Reinstall Microsoft Office 97 from the original media.
	
	10. If the system restarts successfully, ensure that all TSRs in are still
	  disabled, and reinstall the patch.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you install the SR-1 Patch, the Winword.exe or the Wwintl32.dll files are
	not properly updated.
	
	
	The following table shows the file size and date of the Winword.exe file
	installed by Word 97 or the Word 97 SR-1 Patch.
	
	  Version                  File size           Date
	  -------------------------------------------------
	
	  Word 97                  5194 KB           11/17/96
	  Word 97 SR-1 Patch       5200 KB            7/11/97
	
	The default location for the Winword.exe is the C:\Program Files\Microsoft
	Office\Office folder.
	
	The following table shows the file size, date and location of the Wwintl32.dll
	file installed by Word 97 and the Word 97 SR-1 Patch.
	
	  Version                  File size           Date
	  -------------------------------------------------
	
	  Word 97                  1131 KB           11/17/96
	  Word 97 SR-1 Patch       1132 KB            7/11/97
	
	The default location for the Wwintl32.dll file is the following:
	
	  C:\Program Files\Microsoft Office\Office
	
	REFERENCES
	==========
	
	For more information about the Office 97 SR-1 Patch, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q172527 WD97: How to Obtain Word 97 for Windows, Service Release 1
	
	
	  Q172387 OFF97: Files Installed and Updated in MS Office 97 SR-1 Patch
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	  Q172504 OFF97: Cannot Install Patch If MS Office 97 Is Not Located
	
	  Q172516 OFF97: Unable to Run Patch After Upgrading from Trial Version
	
	  Q172399 OFF97: Setup Switches for Microsoft Office 97 SR-1 Patch
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
