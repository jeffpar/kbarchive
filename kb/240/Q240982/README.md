---
layout: page
title: "Q240982: PATCH: Patch_26.exe Fixes Divide by Zero Error on Fast Computers"
permalink: /kb/240/Q240982/
---

## Q240982: PATCH: Patch_26.exe Fixes Divide by Zero Error on Fast Computers

{% raw %}

	Article: Q240982
	Product(s): Microsoft FoxPro
	Version(s): 2.6,2.6a
	Operating System(s): 
	Keyword(s): kbfile kbGrpDSFox kbDSupport
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PATCH_26.exe is a self-extracting executable file that updates the FoxPro for
	Windows version 2.6a development environment and run time to stop startup errors
	that are raised on computers that operate at clock speeds of about 333 MHz and
	faster.
	
	This article also contains the steps to reproduce the error.
	
	There is a separate patch available for users of international versions of FoxPro
	for Windows for which there is no localized 2.6a version. See the MORE
	INFORMATION section of this article for details.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  IPatchFP.exe
	  (http://download.microsoft.com/download/fox26win/patch6/1/W9X/EN-US/IPatchFP.exe)
	
	  Patch_26.exe
	  (http://download.microsoft.com/download/fox26win/patch2/1/WIN98/EN-US/Patch_26.exe)
	
	The Patch_26.exe download contains a patch that can be applied to FoxPro 2.6a for
	Windows. The IPatchFP.exe download contains a version of the patch that is not
	version-specific, and can be applied to international versions of FoxPro for
	Windows for which the 2.6a version is not available. For additional information
	about how to download Microsoft Support files, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Run FoxPro for Windows, or a FoxPro for Windows run-time application, on a
	computer that has a 333MHz (or faster) processor. On some computers, the error
	occurs at startup each time, while on others, the program might load without
	error sometimes and produce the error at other times.
	
	NOTE: The problem that is described in this article might also occur with
	computers that have multiple processors.
	
	When you start FoxPro for Windows or a FoxPro for Windows run-time application on
	a computer that is running Windows 95 or Windows 98, you receive the following
	error message:
	
	  Foxprow
	
	  An error has occurred in your program. To keep working anyway, click Ignore
	  and save your work in a new file. To quit this program, click Close. You will
	  lose information you entered since your last Save.
	
	You can click Ignore or Close. When you click Ignore, FoxPro starts. When you
	click Close, you receive the following error message:
	
	  Foxprow
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the program persists, contact the program vendor.
	
	You can click either Close or Details. When you click Details, you receive the
	following error message:
	
	  FOXPROW causes a divide error in module FOXPROW.EXE at 0001.0000f1c9
	
	NOTE: For a run-time application, the module in this error message is
	Foxw2600.esl.
	
	On a computer that is running Windows NT, after you start FoxPro for Windows or a
	FoxPro for Windows run-time application, you receive the following error
	message:
	
	  System Error
	
	  Divide by Zero or Overflow Error.
	
	When you click Close, the program to quits..
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q102893 PATCH: FoxPro 2.6a Patch Files for FoxPro 2.6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbGrpDSFox kbDSupport 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a
	Version           : :2.6,2.6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
