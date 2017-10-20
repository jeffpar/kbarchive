---
layout: page
title: "Q315704: PDT-Enabled Print Sessions Result in Corrupted or Missing Data"
permalink: /kb/315/Q315704/
---

## Q315704: PDT-Enabled Print Sessions Result in Corrupted or Missing Data

{% raw %}

	Article: Q315704
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print sessions that are configured to use a printer definition table (PDT) on
	Host Integration Server 2000 may cause missing or corrupted print output.
	
	CAUSE
	=====
	
	The PDFcomp.exe utility that is included with Host Integration Server 2000
	incorrectly truncates all macros that are defined in the printer definition file
	(PDF) that contain NULL characters (X'00'). This results in a corrupted PDT
	file, which can cause print output problems, such as missing or corrupted data.
	
	WORKAROUND
	==========
	
	This problem does not occur in SNA Server 4.0, so you can usually copy a version
	of the PDT file from SNA Server 4.0 to the Host Integration Server 2000 server
	to correct the problem.
	
	A PDT file that is compiled by the PDFcomp.exe utility on SNA Server 4.0 will
	work on HIS 2000 in most cases. The PDFcomp.exe utility is located in the
	<SNAROOT> directory on an SNA Server 4.0 system if the host print service
	is installed. It is also located in the following folder on the SNA Server 4.0
	CD-ROM:
	
	  \I386\System\Printsrv
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The following are some example PDF macros that contain NULL characters:
	
	P10 EQU 1B 7E 02 00 01 32
	P12 EQU 1B 7E 02 00 01 3C
	P13 EQU 1B 7E 02 00 01 43
	P15 EQU 1B 7E 02 00 01 4B
	SDW EQU 1B 7E 0E 00 01 09
	EDW EQU 1B 7E 0E 00 01 0A
	
	Each of these macros may be truncated at the position where the NULL character
	occurs.
	
	For more information about PDFs and PDT files, see the Host Integration Server
	2000 Help documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
