---
layout: page
title: "Q248418: FIX: Unable to Develop WebClass on Windows 2000"
permalink: /kb/248/Q248418/
---

## Q248418: FIX: Unable to Develop WebClass on Windows 2000

	Article: Q248418
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDesigner kbVBp600bug kbWebClasses kbGrpDSASP kbDSupport kbVS600sp4fix
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When developing IIS Applications (WebClasses) on Microsoft Windows 2000, the
	following error messages occurs:
	
	  Internet Information Server or Peer Web Services version 3.0 or later must be
	  installed to run WebClass.
	
	  -or-
	
	  Error in Loading DLL
	
	which may then be followed by these additional error messages:
	
	  Errors during load. Refer to 'C:\Program Files\Microsoft Visual
	  Studio\VB98\Template\Projects\WebClass.log' for details.
	
	  -and-
	
	  'C:\Program Files\Microsoft Visual
	  Studio\VB98\Template\Projects\WebClass.Dsr' could not be loaded.
	
	CAUSE
	=====
	
	The WebClass Designer searches the registry for the Active Server Pages (ASP)
	2.0 Type Library key. By default, Windows 2000 only has the registry key for the
	3.0 version of the ASP Type Library. Because of this, the above error messages
	occur.
	
	RESOLUTION
	==========
	
	NOTE: The following resolution requires the use of Regtlib.exe, which is
	contained in Visual Studio Service Pack 3. To obtain Visual Studio Service Pack
	3, see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/vstudio/sp/vs6sp3/default.asp
	
	Registering the ASP.tlb Type Library adds the 2.0 key to the ASP Type Library
	registry entry. The asp.tlb file can be found on Disk 1 of either the
	Professional or Enterprise version of Microsoft Visual Studio in the following
	directory:
	
	  Common\IDE\IDE98
	
	Copy asp.tlb to the following directory:
	
	  Program Files\Microsoft Visual Studio\Common\IDE\IDE98
	
	Use the regtlib.exe file to register the ASP 2.0 Type Library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Some Microsoft applications, including Visual Studio 6.0 Service Packs 2 and 3,
	register the asp.tlb 2.0 Type Library automatically. The stand-alone Visual
	Basic 6.0 does not.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kberrmsg kbDesigner kbVBp600bug kbWebClasses kbGrpDSASP kbDSupport kbVS600sp4fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
