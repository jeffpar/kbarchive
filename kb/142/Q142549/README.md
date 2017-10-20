---
layout: page
title: "Q142549: How to Troubleshoot VFP OLE Memory Errors in 16-bit Windows"
permalink: /kb/142/Q142549/
---

## Q142549: How to Troubleshoot VFP OLE Memory Errors in 16-bit Windows

{% raw %}

	Article: Q142549
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of limitations in the operating system and the memory requirements of
	Object Linking and Embedding operations (OLE), Visual FoxPro running under
	Windows 3.1 or Windows for Workgroups may produce any one of several different
	error messages. These errors may occur randomly or after repeated OLE
	operations. This article describes how to troubleshoot OLE error messages by
	delving into the causes.
	
	MORE INFORMATION
	================
	
	If Visual FoxPro or the operating system encounters a low-memory situation or a
	memory conflict on a computer, various error messages may appear. For example,
	Visual FoxPro could cause a general protection (GP) fault, Win32s unhandled
	exception error, segment load failure, or it may cause the computer to hang.
	While this list is not complete but does include the most common problems.
	
	When OLE operations fail, it is usually because you have low or improperly
	configured memory, low Graphics Device Interface (GDI) resources, conflicts in
	memory, or corrupt Win32s subsystem files.
	
	Low or Improperly Configured Memory
	-----------------------------------
	
	Because OLE operations need considerable memory to function, the configuration of
	memory is important. First, eliminate any expanded memory on the machine. Visual
	FoxPro cannot use expanded memory, so it takes away from the total pool of
	extended memory. Second, make sure that Windows is configured to use a permanent
	swap file. The permanent swap file allows Windows to swap code out of physical
	RAM and onto the hard drive. The permanent swap file must be at least 12-14
	megabytes in size. However, for intense OLE operations, a larger swap file is
	frequently necessary.
	
	Low Graphics Device Interface (GDI) Resources
	---------------------------------------------
	
	Because Window 3.1 and Windows for Workgroups are both 16-bit operating systems,
	there is a limit to the GDI resources available for programs. Often, if Visual
	FoxPro cannot acquire the needed GDI resources to complete an operation, Windows
	will report an "Insufficient Memory" message. Switching to Program Manager and
	choosing Help About Program Manager offers a rough estimate of the available
	system resources. If this number is below 50 percent, problems may develop.
	Strategies for freeing system resources are provided in one of the articles
	listed in the "References" section of this article.
	
	Conflicts in Memory
	-------------------
	
	Various memory conflicts may cause OLE errors. The two quickest way to
	troubleshoot memory conflicts are to change the video driver to standard VGA and
	perform a 'clean boot' of the computer. The Windows User's Guide provides steps
	to changing video drivers. Instructions for a 'clean boot' configuration are in
	one of the articles listed in the "References" section of this article.
	
	Corrupt Win32s Subsystem Files
	------------------------------
	
	An improperly installed Win32s subsystem may generate OLE errors. The Win32s
	files allow the 32-bit code of Visual FoxPro to communicate with the 16-bit code
	of Windows 3.1 or Windows for Workgroups. This process is called thunking. Steps
	for reinstalling Win32s are outlined in an article listed in the "References"
	section of this article.
	
	REFERENCES
	==========
	
	For more information about topics discussed in this article, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q112676 Troubleshooting Insufficient Memory Errors
	
	  Q87290 What is a Clean Boot for Windows 3.1?
	
	  Q90511 What is a Clean Boot for Windows for Workgroups?
	
	  Q111428 What is a Clean Boot for WFWG 3.11 with Netware?
	
	  Q92603 What is a Clean Boot for WFWG with Novell Connectivity
	
	  Q90762 Information on System Resources in Windows
	
	
	  Q129979 How to Reinstall Win32s with Visual FoxPro
	
	  Q101808 Insufficient Memory or Not Enough Memory for Application
	
	
	Additional query words: VFoxWin kblist
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
