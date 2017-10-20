---
layout: page
title: "Q214493: FIX: Project Differences Report for Identical Files"
permalink: /kb/214/Q214493/
---

## Q214493: FIX: Project Differences Report for Identical Files

{% raw %}

	Article: Q214493
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600bug kbSSafe600fix kbSSExplorer kbDSupport kbGrpDSSSafe kbSSafe600qfe
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display Project Differences in the Visual SourceSafe Explorer, certain
	files are reported to be different, but the File Difference reports that the
	files are identical.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the "eol = n" setting from the user's Ss.ini
	file. If you have this setting because some users are on the UNIX platform,
	modify the Ss.ini file so that it contains the following:
	
	  eol (PC) = rn
	  eol (UNIX) = n
	
	Note that if you remove or change the "eol = n" setting, you must remove the
	local copy of the file affected and then Get Latest Version to see the correct
	behavior.
	
	A supported fix for Visual SourceSafe 6.0 that corrects this problem is now
	available from Microsoft, but it has not been fully regression tested and should
	be applied only to systems that experience this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
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
	
	The following file contains a self-extracting EXE.
	+-----------------------------------------------------------+
	| Name        | Size      | Date      | Time     | Platform | 
	+-----------------------------------------------------------+
	| VSS8764.EXE | 2,853,089 | 2/16/2000 | 11:28 AM | x86      | 
	+-----------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the earlier referenced Web site. If
	you contact Microsoft to obtain this fix, a fee may be charged. This fee is
	refundable if it is determined that you only require the fix you requested.
	However, this fee is non-refundable if you request additional technical support,
	if your no-charge technical support period has expired, or if you are not
	eligible for standard no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in a hotfix for Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add the line "eol = n" to your Ss.ini file. This file is located under the
	  VSS\users\<your login name> subdirectory. If Visual SourceSafe is
	  currently running, close it and then restart.
	
	2. Create a new text file that contains line breaks.
	
	3. Add the text file that you created to Visual SourceSafe, and then remove the
	  local copy.
	
	4. Select the Get on the Latest Version of the text file from the Visual
	  SourceSafe Explorer to its working directory.
	
	5. From the Visual SourceSafe Explorer, display the Project Differences.
	
	  NOTE: The text file appears in red in the Differences window. This indicates
	  that the local copy of the text file is different from the Visual SourceSafe
	  copy.
	
	6. Display the File Differences in Visual SourceSafe Explorer. Visual SourceSafe
	  reports that the files are identical.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q170750 End of Line Character Settings for Visual SourceSafe
	
	Additional query words: DIFF
	
	======================================================================
	Keywords          : kbSSafe600bug kbSSafe600fix kbSSExplorer kbDSupport kbGrpDSSSafe kbSSafe600qfe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
