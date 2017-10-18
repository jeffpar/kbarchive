---
layout: page
title: "Q216329: Cluster Server Log Filling w/ Erroneous Security Descriptor Info"
permalink: kb/216/Q216329/
---

## Q216329: Cluster Server Log Filling w/ Erroneous Security Descriptor Info

	Article: Q216329
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the installation of Windows NT Service Pack 4, Cluster Server logging will
	now capture much more information than is necessary. The unnecessary information
	is Security Descriptor information. For example,
	
	  279::21-23:46:51.543 [ClRtlCopySecurityDescriptor] psd = 0x0019a600
	  1a8::21-23:46:51.543 [API] Did not find Security Descriptor key in the cluster
	  DB
	
	CAUSE
	=====
	
	While adding logging capabilities during Service Pack 4 timeframe, the code
	logged all the Security Descriptor logable events, instead of determining when
	they would be valid. In this situtation, they are only valid in a mixed Windows
	NT 4.0 and Windows 2000 cluster configuration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 sp4
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
