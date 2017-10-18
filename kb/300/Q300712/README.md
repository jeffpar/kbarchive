---
layout: page
title: "Q300712: Label Promotion After Share Pin and Branch Operation Fails"
permalink: kb/300/Q300712/
---

## Q300712: Label Promotion After Share Pin and Branch Operation Fails

	Article: Q300712
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The problem occurs when you are creating a new project using the procedure
	called "Share, Pin, and Branch to Create Service Pack Projects" (see Help). As
	described in the procedure you should choose NOT to branch after share. If you
	do choose not to branch after share, this sets up a new-shared project and pins
	all files at the version label that was selected. If you then attempt to apply a
	label to the new project at the project level and then branch and update one of
	the files, relabeling the latest revision of the branched file and doing a get
	on the project label returns the file at the original prepromoted labeled
	version.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------------------------------------------------+
	| Name         | Size (bytes) | Date      | Time    | Version    | Platform | 
	+---------------------------------------------------------------------------+
	| Analyze.exe  | 199,952      | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ddconv.exe   | 295,184      | 5/22/2001 | 1:23 PM | none       | x86      | 
	+---------------------------------------------------------------------------+
	| Ddupd.exe    | 420,112      | 5/22/2001 | 1:23 PM | none       | x86      | 
	+---------------------------------------------------------------------------+
	| Ss.exe       | 397,072      | 5/22/2001 | 1:23 PM | none       | x86      | 
	+---------------------------------------------------------------------------+
	| Ssadmin.exe  | 12,048       | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssapi.dll    | 561,424      | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssarc.exe    | 498,960      | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssexp.exe    | 16,656       | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssgui.dll    | 1,135,376    | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssrestor.exe | 496,912      | 5/22/2001 | 1:23 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssscc.dll    | 1,414,416    | 5/22/2001 | 1:24 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	| Ssus.dll     | 480,528      | 5/22/2001 | 1:24 PM | 06.00.9238 | x86      | 
	+---------------------------------------------------------------------------+
	
	The self-extracting .exe file should be:
	
	+----------------------------------------------------------------------+
	| Name          | Size      | Date     | Time     | Version | Platform | 
	+----------------------------------------------------------------------+
	| VSS9238en.exe | 2,733,568 | 6/4/2001 | 10:23 AM | none    | x86      | 
	+----------------------------------------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe32bitSearch
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
