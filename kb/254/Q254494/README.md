---
layout: page
title: "Q254494: FIX: Analyze -F Causes Inconsistencies Error Messages"
permalink: /kb/254/Q254494/
---

## Q254494: FIX: Analyze -F Causes Inconsistencies Error Messages

	Article: Q254494
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600bug kbSSafe600fix kbAnalyze kbDSupport kbGrpDSSSafe kbSSafe600qfe kbSSafeAnal
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Analyze.exe -F causes the following inconsistency error message if the Visual
	SourceSafe (VSS) database contains 10 multibyte character set (MBCS) files with
	the same first eight text bytes and, if there is a long file name with the first
	eight bytes that are the same text in the database, the name is changed after
	Analyze.exe -F:
	
	  Analyze Visual SourceSafe Version 6.0 (Build 8383)
	  Database analysis in progress @ 99/03/17;16:27.
	  Creating a new nameset, or long filename information, for the file
	  <TESTABCDEFGHIJKL>
	  Creating a new nameset, or long filename information, for the file
	  <TEST9>.txt.
	  Analysis complete @ 99/03/17;16:27
	  Potentially serious errors or inconsistencies were found.
	
	In the VSS Explorer, open the database and the file name
	"<TESTABCDEFGHIJKLMN>.txt" is changed to "<TESTABCDEFGHIJKL>."
	
	RESOLUTION
	==========
	
	A supported fix for Visual SourceSafe 6.0 that corrects this problem is now
	available from Microsoft, but it has not been fully regression tested and should
	be applied only to systems that are experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://www.microsoft.com/support/supportnet/overview/overview.asp
	
	The English version of this fix has the following file attributes or later:
	
	+-------------------------------------------------------------------------+
	| Name         | Size      | Date      | Time     | Version    | Platform | 
	+-------------------------------------------------------------------------+
	| Analyze.exe  | 211,968   | 2/3/2000  | 11:28 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ddconv.exe   | 311,296   | 2/3/2000  | 10:55 AM | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ddupd.exe    | 443,392   | 2/3/2000  | 10:58 AM | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Readme.txt   | 5,261     | 2/16/2000 | 11:28 AM | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ss.exe       | 416,256   | 2/3/2000  | 10:48 AM | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ssapi.dll    | 591,360   | 2/3/2000  | 10:52 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssarc.exe    | 528,896   | 2/3/2000  | 11:03 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssgui.dll    | 1,564,672 | 2/3/2000  | 11:42 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssrestor.exe | 526,848   | 2/3/2000  | 11:05 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssscc.dll    | 1,501,696 | 2/3/2000  | 11:38 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssus.dll     | 480,768   | 2/3/2000  | 11:42 AM | 06.00.8764 | x86      | 
	+-------------------------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the preceding Web site. If you
	contact Microsoft to obtain this fix, a fee may be charged. This fee is
	refundable if it is determined that you only require the fix you requested.
	However, this fee is non-refundable if you request additional technical support,
	if your no-charge technical support period has expired, or if you are not
	eligible for standard no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in a hotfix for Visual SourceSafe 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600bug kbSSafe600fix kbAnalyze kbDSupport kbGrpDSSSafe kbSSafe600qfe kbSSafeAnalyze 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
