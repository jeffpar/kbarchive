---
layout: page
title: "Q152516: INFO: List of ODBC Files Installed During Setup"
permalink: /kb/152/Q152516/
---

## Q152516: INFO: List of ODBC Files Installed During Setup

{% raw %}

	Article: Q152516
	Product(s): Microsoft FoxPro
	Version(s): 3.00b 3.00
	Operating System(s): 
	Keyword(s): kbsetup kbHWMAC kbvfp300
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When doing a complete install of Visual FoxPro for Macintosh or a Custom install
	with the ODBC Support selected, various ODBC-related files are installed in the
	System folder of the Macintosh. This article lists the files installed, their
	location, version, and size.
	
	NOTE: As of 12/9/98, Visigenic Software has been acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, Inc., query in the Microsoft
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The following ODBC files, all with Visigenic Software, Inc. copyrights, are
	installed in:
	
	1. The System:Extensions folder:
	
	             Name                    Version        Size
	  -------------------------------   ---------   ------------
	  ODBC Configuration Manager PPC    2.1.1       159,298 bytes
	  ODBC Cursor Library PPC           2.1.1        95,362 bytes
	  ODBC Driver Manager PPC           2.1.1        95,706 bytes
	  ODBC SQL Server ADSP Netlib PPC   2.50.1122     6,695 bytes
	  ODBC SQL Server Driver PPC        2.50.1122   320,036 bytes
	  ODBC SQL Server Setup PPC         2.50.1122    30,171 bytes
	  ODBC SQL Server TCP Netlib PPC    2.50.1122     8,653 bytes
	
	2. The System:Control Panels folder:
	
	             Name                    Version        Size
	  -------------------------------   ---------   ------------
	  ODBC Setup PPC                    2.1.1        94,563 bytes
	
	3. System:Preferences folder, once a data source is set up using the ODBC Setup
	  PPC control panel:
	
	             Name                    Version        Size
	  -------------------------------   ---------   ------------
	  ODBC Preferences PPC              none        varies
	
	With the Visual FoxPro for Macintosh Setup Wizard, developers can include support
	for ODBC on the distribution disks that are created. When these distribution
	disks are being created for the PowerPC platform, the Setup Wizard pulls in
	copies of the ODBC files installed in the System folders (except the ODBC
	Preferences PPC file) and compresses them before including them on the disks. If
	any of the above-listed files are missing or are the wrong version, the Setup
	Wizard can fail.
	
	The Setup Wizard can also include support for ODBC when creating distribution
	disks for the 68K platform. In this case, the ODBC support files are drawn from
	subfolders under the Microsoft Visual FoxPro:Distribution Sources folder. When
	these distribution disks are installed on a Macintosh (either 68K or PPC), 68K
	versions of the above- listed files are installed in the System:Extensions and
	System:Control Panels folders. The names and sizes are listed below:
	
	             Name                    Version        Size
	  -------------------------------   ---------   ------------
	  ODBC Configuration Manager        2.1.1       146,675 bytes
	  ODBC Cursor Library               2.1.1        67,402 bytes
	  ODBC Driver Manager               2.1.1        66,631 bytes
	  ODBC SQL Server ADSP Netlib       6.0b3         5,385 bytes
	  ODBC SQL Server Driver            6.0b3       202,513 bytes
	  ODBC SQL Server Setup             6.0b3        18,960 bytes
	  ODBC SQL Server TCP Netlib        6.0b3         3,865 bytes
	
	  ODBC Setup                        2.1.1        94,891 bytes
	
	Microsoft Office and FoxPro for Macintosh 2.6 also install earlier versions of
	the 68K ODBC files. Those versions of the ODBC files have Apple Computer, Inc.
	copyrights. The Apple and Visigenic files should both work with Visual FoxPro
	68K applications and Office.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151853 Required Files For The Pivot Table Wizard
	
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          : kbsetup kbHWMAC kbvfp300 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300Mac
	Version           : 3.00b 3.00
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
