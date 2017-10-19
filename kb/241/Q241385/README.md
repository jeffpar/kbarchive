---
layout: page
title: "Q241385: PRB: MSDN Library Topics Display ActiveX Control Warning"
permalink: /kb/241/Q241385/
---

## Q241385: PRB: MSDN Library Topics Display ActiveX Control Warning

	Article: Q241385
	Product(s): Microsoft Developer Network
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbOSWinNT400 kbDSupport kbGrpDSTools
	Last Modified: 02-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying any topic in the MSDN Library on Windows NT 4.0, the following
	error appears:
	
	  This page provides potentially unsafe information to an ActiveX control. Your
	  current security settings prohibit running controls in this manner. As a
	  result, this page may not display correctly.
	
	CAUSE
	=====
	
	An incorrect or corrupt version of Comcat.dll is on the Windows NT 4.0 system.
	Usually, this happens when Comcat.dll is incorrectly updated to a 5.0 version of
	the file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q201364 PRB: Mismatched Ole32.dll and Comcat.dll
	
	RESOLUTION
	==========
	
	Use the following steps to restore the 4.71 version of Comcat.dll:
	
	1. Close all running applications.
	
	2. On the Start menu, click Run.
	
	3. Type "CMD" (without the quotation marks), and then press ENTER.
	
	4. When the command prompt appears, navigate to the System directory where
	  Comcat.dll resides. For example, the following command will navigate to the
	  C:\Winnt\System32 directory:
	
	  cd C:\Winnt\System32
	
	5. Next use the rename command as follows:
	
	  rename Comcat.dll Comcat.bak
	
	6. Close the command prompt window.
	
	7. Restart the computer.
	
	8. Download and install VBRun60sp5.exe to place the 4.71.1460.1 version of
	  Comcat.dll on the system. Please see the following Knowledge Base article on
	  VBRun60sp5.exe:
	
	  Q290887 FILE: VBRun60sp5.exe Installs Visual Basic 6.0 SP5 Run-Time Files
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information, please see the following Knowledge Base articles:
	
	  Q201364 PRB: Mismatched Ole32.dll and Comcat.dll
	
	  Q240092 OL2000: Error Message This page provides potentially unsafe
	  information to an Active X control. Your current security settings prohibit
	  running controls in this manner. As a result, this page may not display
	  properly.
	
	  Q177943 ActiveX Errors Running Microsoft Internet Explorer
	
	  Q235653 Err Msg: This Page Provides Potentially Unsafe Information to an
	  ActiveX Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbOSWinNT400 kbDSupport kbGrpDSTools 
	Technology        : kbOSWinSearch kbOSWinNT400 kbMSDNSearch kbZNotKeyword2 kbOSWinNTSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
