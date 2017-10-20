---
layout: page
title: "Q174517: PRB: Office 97 SR-1 Patch Doesn't Update VB 5.0 Jet/DAO DLLs"
permalink: /kb/174/Q174517/
---

## Q174517: PRB: Office 97 SR-1 Patch Doesn't Update VB 5.0 Jet/DAO DLLs

{% raw %}

	Article: Q174517
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have installed Office 97, then Visual Basic 5.0, then the Office 97
	Service Release (SR-1) Patch file, the latest DLLs for Jet are not installed
	correctly on your machine.
	
	NOTE: This problem does not occur if you reinstall Office 97 SR-1 from the
	installation CD-ROM; the problem occurs only if you install the SR-1 Patch file.
	
	CAUSE
	=====
	
	The version of Microsoft Jet installed with Visual Basic 5.0 is not the same as
	that which shipped with Microsoft Access 97. The Office 97 SR-1 Patch file does
	not detect this; and therefore, does not replace files that are newer than
	Office 97, but older than what is provided with Office 97 SR-1.
	
	RESOLUTION
	==========
	
	There are two ways to avoid this problem:
	
	- Obtain the Office 97 SR-1 Patch on CD-ROM rather than the downloadable SR-1
	  Patch file. The CD is available via MSDN Universal Subscription.
	
	  -or-
	
	- Install Jet 3.51, which updates and replaces files installed by either Visual
	  Basic 5.0 or Office 97 SR-1.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Jet 3.51 actually offers newer versions of the Jet engine than Office 97 SR- 1.
	Installing Jet 3.51 provides you with the latest version of the Jet engine, and
	nullifies the problem described above. In addition, you can use the version
	information listed in the following table to confirm which version of Jet you
	have installed on your machine.
	
	  File Name     Office 97     VB 5.0        Office 97 SR-1   Jet 3.51
	  ----------------------------------------------------------------------
	  MSJET35.DLL   3.50.3428.0   3.50.3602.4   3.50.3907.5      3.51.0623.4
	  MSJINT35.DLL  3.50.3428.0   3.50.3602.5   3.50.3907.0
	  MSJTER35.DLL  3.50.3428.0   3.50.3602.0   3.50.3907.0
	  MSREPL35.DLL  3.50.3428.0   3.50.3602.0   3.50.3907.0      3.51.0623.0
	
	REFERENCES
	==========
	
	More information about Office 97 SR-1 can be found at:
	
	  http://www.microsoft.com/office/
	
	More information about Jet 3.51 can be found at:
	
	  http://support.microsoft.com/support/kb/articles/Q172/7/33.asp
	
	The file name is Jet35upd.exe.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q174309 : ACC97: MS Office 97 SR-1 Patch Fails to Patch MS Jet Files
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
