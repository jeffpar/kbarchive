---
layout: page
title: "Q237357: BUG: SSEXP Stops Responding w/ Invalid Page Fault During Checkin"
permalink: kb/237/Q237357/
---

## Q237357: BUG: SSEXP Stops Responding w/ Invalid Page Fault During Checkin

	Article: Q237357
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug kbSSExplorer kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When checking in a document to a Microsoft Visual SourceSafe (VSS) database
	while using Keyword Expansion, an Invalid Page Fault occurs.
	
	CAUSE
	=====
	
	Keyword Expansion uses a maximum buffer size of 132 characters. When this
	maximum buffer size is exceeded, notably between 160 and 170 characters, SSEXP
	stops responding, resulting in an Invalid Page Fault.
	
	This behavior has been reproduced during checkin using the $Archive, $Log, and
	$Logfile keywords. When any of these keywords expand with a project path
	(including backslashes) that exceeds the maximum buffer size, the buffer
	overflows, eventually overwriting protected memory and causing an Invalid Page
	Fault in SSEXP.
	
	It is also possible that this behavior might occur in any Keyword that requested
	a project path exceeding the maximum buffer size.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
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
	
	The English version of this fix must have the following file attributes or
	later:
	
	  Date         Time   Version             Size   File name
	  --------------------------------------------------------------
	  23-Apr-2002  09:12  06.00.9569        199,952  ANALYZE.EXE      
	  23-Apr-2002  09:12                    295,696  DDCONV.EXE       
	  23-Apr-2002  09:12                    420,624  DDUPD.EXE        
	  23-Apr-2002  09:12                    224,969  DELTA_SS.EXE     
	  23-Apr-2002  09:12                    111,888  MKSS.EXE         
	  23-Apr-2002  09:12                    231,143  PVCS_SS.EXE      
	  23-Apr-2002  09:12                     38,790  READMESS.HTM
	  23-Apr-2002  09:12                    397,584  SS.EXE           
	  23-Apr-2002  09:12  06.00.9569         12,048  SSADMIN.EXE      
	  23-Apr-2002  09:12  06.00.9569        562,448  SSAPI.DLL        
	  23-Apr-2002  09:12  06.00.9569        499,472  SSARC.EXE        
	  23-Apr-2002  09:12  06.00.9569        480,528  SSDE.DLL         
	  23-Apr-2002  09:12  06.00.9569        522,512  SSES.DLL         
	  23-Apr-2002  09:12  06.00.9569         16,656  SSEXP.EXE        
	  23-Apr-2002  09:12  06.00.9569        522,512  SSFR.DLL         
	  23-Apr-2002  09:12  06.00.9569      1,132,304  SSGUI.DLL        
	  23-Apr-2002  09:12  06.00.9569        140,800  SSINT.EXE        
	  23-Apr-2002  09:12  06.00.9569        515,856  SSIT.DLL         
	  23-Apr-2002  09:12  06.00.9569        480,528  SSJP.DLL         
	  23-Apr-2002  09:12                    152,336  SSLOGIN.EXE      
	  23-Apr-2002  09:12  06.00.9569        497,424  SSRESTOR.EXE     
	  23-Apr-2002  09:12  06.00.9569      1,412,368  SSSCC.DLL        
	  23-Apr-2002  09:10  06.00.9569        480,528  SSUS.DLL         
	  23-Apr-2002  09:10                    101,136  TESTLOCK.EXE     
	  23-Apr-2002  09:10                    144,144  UNLOCK.EXE       
	  23-Apr-2002  09:10                    121,104  UPDINI.EXE        
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to reproduce:
	
	1. Create enough projects, subprojects, and text files in the Visual SourceSafe
	  tree so that a project path size of greater than 170 characters including
	  backslashes.
	
	2. Check the file out through the Visual SourceSafe explorer.
	
	3. Edit the file, adding one of the keywords mentioned in the "Cause" section.
	  Keyword Expansion must be turned on for this to work properly.
	
	4. Check the file in.
	
	REFERENCES
	----------
	
	Microsoft Online Help provided with Visual SourceSafe 6
	
	Microsoft Visual SourceSafe 5 Users Guide, pages 89 - 94
	
	Microsoft Knowledge Base article:
	
	  Q141504 HOWTO: Make SourceSafe Keyword Expansion Work in Text Docs
	
	Additional query words: explorer crashes
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug kbSSExplorer kbDSupport 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
