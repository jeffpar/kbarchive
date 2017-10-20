---
layout: page
title: "Q196141: PRB: Problems Using Intrinsic File System Controls"
permalink: /kb/196/Q196141/
---

## Q196141: PRB: Problems Using Intrinsic File System Controls

{% raw %}

	Article: Q196141
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbCtrl kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the intrinsic Visual Basic file system controls (for example,
	DriveListBox, DirListBox, FileListBox), some or all of your files are not
	listed. This usually occurs when you are trying to access files on a network
	server, but can occur locally under some circumstances.
	
	CAUSE
	=====
	
	The following statement is copied from the Visual Basic 5.0 Programmer's Guide
	(page 67) and you can also find it in the File System Controls section of the
	Forms, Controls, and Menus topic in Books Online:
	
	  Note: These controls are provided primarily for backward compatibility with
	  applications created in earlier versions of Visual Basic. The common dialog
	  control provides an easier method of working with file access.
	
	  For more information on common dialog control, see "Miscellaneous Controls"
	  later in this chapter.
	
	These controls are old technology. They were not designed for, nor tested with,
	some of the new operating and network system software. Specifically, these
	controls rely on the existence of 8.3 file and directory names. Any set of
	circumstances that result in the unavailability of 8.3 names will cause
	problems. For example, you can disable the creation of 8.3 file or directory
	names on a Windows NT Server. If this happens, the intrinsic controls will only
	see those directories or files that have 8.3 names.
	
	RESOLUTION
	==========
	
	As stated in the Visual Basic 5.0 Programmer's Guide, the best resolution is to
	use the CommonDialog control. Not only is it more likely to work, it also makes
	your application's user interface consistent with other Windows applications.
	
	Even if you do not want to use the CommonDialog, it can help you determine the
	specific nature of the problem you are experiencing. To demonstrate this, try
	using the CommonDialog to access the directories or files that are causing the
	problem when you are using the intrinsic controls. If the CommonDialog can
	display these files, the problem is most likely the result of the limitations of
	the intrinsic controls. If the CommonDialog fails, the problem is most likely
	located in the computer or network file system configuration.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q196028: PRB: FileListBox Control May Not List File Names Properly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbCtrl kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
