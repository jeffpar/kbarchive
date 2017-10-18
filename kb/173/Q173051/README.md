---
layout: page
title: "Q173051: WD97: Errors Removing &quot;Run From Network Server&quot; Installation"
permalink: kb/173/Q173051/
---

## Q173051: WD97: Errors Removing &quot;Run From Network Server&quot; Installation

	Article: Q173051
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running a "Run from Network Server" installation of Word, if you
	run Microsoft Word 97 Setup and click Remove All, you will see the following
	message:
	
	  &Run From Network Server is a shared component, and there may be other
	  applications using it. If you are sure you want to remove it, click the
	  remove button. Otherwise, click the keep button.
	
	  If you want to remove all shared components, click the Remove All button. If
	  you do not want to remove any of shared components, click the Remove None
	  button.
	
	  [Keep] [Remove] [Remove None] [Remove All]
	
	When you click Keep, Word is not removed from your computer. When you run the
	Setup program again to try to remove Word, the following error message is
	displayed:
	
	  The Setup configuration file 'C:\PROGRA~1\MICROS~4\OFFICE\SETUP \Word97.stf'
	  is missing or corrupted. Try running Setup again from where you originally
	  ran it.
	
	NOTE: This problem occurs when one or more Microsoft Office 97 applications (for
	example Microsoft Word 97 for Windows and Microsoft Excel 97 for Windows) have
	been set up as individual "Run from Network Server" programs. This problem does
	not occur when you have performed the Microsoft Office 97 for Windows "Run from
	Network Server" setup.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Re-install Word.
	
	2. After Word has been re-installed, on the Windows Start menu, point to
	  Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, click to select the application you want to
	  remove, and then click the Add/Remove button.
	
	  The Microsoft Word 97 Setup program will start.
	
	5. In the Microsoft Word 97 Setup dialog box, click Remove All.
	
	6. When you are prompted with the "Are you sure you want to remove Microsoft
	  Word 97?", message, click Yes.
	
	7. In the Remove Shared Component dialog box, you will see the first message
	  "&Run From Network Server" as described in the Symptoms section of this
	  article. Click Remove or Remove All.
	
	  NOTE: If you click Keep or Remove None, Microsoft Word 97 will not be removed
	  from your computer and you will receive the second message as described in
	  the "Symptoms" section of this article when you try to remove Word again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.0 8.00 install installation standalone
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
