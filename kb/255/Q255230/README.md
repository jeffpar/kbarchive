---
layout: page
title: "Q255230: FIX: Memory Leak in OLE Automation for Visual SourceSafe"
permalink: /kb/255/Q255230/
---

## Q255230: FIX: Memory Leak in OLE Automation for Visual SourceSafe

	Article: Q255230
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe600fix kbDSupport kbGrpDSSSafe kbSSafe600qfe
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call Get (GetVSSItem function) from the Visual SourceSafe OLE
	Automation interface, there is memory that is not released.
	
	CAUSE
	=====
	
	The reason for this problem is that there is a memory leak in the VSSItem::Get
	function.
	
	RESOLUTION
	==========
	
	A supported fix for Visual SourceSafe 6.0 that corrects this problem is now
	available from Microsoft, but it has not been fully regression tested and should
	be applied only to systems that experience this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please view the following Web
	address:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix has the following file attributes or later:
	
	+-------------------------------------------------------------------------+
	| Name         | Size      | Date      | Time     | Version    | Platform | 
	+-------------------------------------------------------------------------+
	| Analyze.exe  | 211,968   | 2/16/2000 | 7:24 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ddconv.exe   | 311,296   | 2/16/2000 | 6:51 PM  | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ddupd.exe    | 443,392   | 2/16/2000 | 6:54 PM  | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Readme.txt   | 5,454     | 2/23/2000 | 12:00 PM | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ss.exe       | 416,256   | 2/16/2000 | 6:44 PM  | none       | x86      | 
	+-------------------------------------------------------------------------+
	| Ssapi.dll    | 591,360   | 2/16/2000 | 6:48 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssarc.exe    | 528,896   | 2/16/2000 | 6:59 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssgui.dll    | 1,564,672 | 2/16/2000 | 7:39 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssrestor.exe | 526,848   | 2/16/2000 | 7:01 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssscc.dll    | 1,501,696 | 2/16/2000 | 7:35 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	| Ssus.dll     | 480,768   | 2/16/2000 | 7:39 PM  | 06.00.8777 | x86      | 
	+-------------------------------------------------------------------------+
	
	The following file is contained in a self-extracting EXE.
	+-----------------------------------------------------------+
	| Name        | Size      | Date      | Time     | Platform | 
	+-----------------------------------------------------------+
	| VSS8777.EXE | 2,853,320 | 2/23/2000 | 12:00 PM | x86      | 
	+-----------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM), and you need this fix, please
	call the Pay Per Incident number listed in the above Web address. If you contact
	Microsoft to obtain this fix, a fee may be charged. This fee is refundable if it
	is determined that you only require the fix you requested. However, this fee is
	non-refundable if you request additional technical support, if your no-charge
	technical support period has expired, or if you are not eligible for standard
	no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in a hotfix for Visual SourceSafe 6.0.
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Automation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe600fix kbDSupport kbGrpDSSSafe kbSSafe600qfe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
