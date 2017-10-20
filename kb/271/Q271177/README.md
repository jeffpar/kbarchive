---
layout: page
title: "Q271177: FIX: Unable To Repair Password Protected Database"
permalink: /kb/271/Q271177/
---

## Q271177: FIX: Unable To Repair Password Protected Database

{% raw %}

	Article: Q271177
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.5 SP1,4.0
	Operating System(s): 
	Keyword(s): kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbMDAC250bug kbMDAC250SP1bug kbWin2000SP2Fi
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.5, 2.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft Access ODBC driver, you can repair or compact a Microsoft
	Access database. This functionality is accessable from the ODBC Control Panel,
	through the ODBC Microsoft Access Setup dialog box. This repair and compact
	functionality works correctly for non-password protected databases. However,
	when you attempt to repair or compact password protected databases, the repair
	or compact fails with the following error message:
	
	  Not a valid password
	
	RESOLUTION
	==========
	
	This problem is fixed in the latest service packs for Windows 2000 and MDAC
	2.5.
	
	- To resolve this problem, obtain the latest service pack for Windows 2000. For
	  additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	- To resolve this problem, obtain the latest service pack for Microsoft Data
	  Access Components 2.5. For additional information, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q293312 INFO: How to Obtain the Latest MDAC 2.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Version     Size     File name      Platform
	  --------------------------------------------------------
	  08/29/2000  4.0.5629.0  270,608  Odbcjt32.dll   x86 
	
	
	
	
	
	WORKAROUND
	==========
	
	One workaround is to use the JetComp tool that is included with Microsoft Jet
	4.0 Service Pack 4. JetComp is a standalone tool that allows you to repair and
	compact a Microsoft Access database, even if Microsoft Access is not installed
	on the computer.
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no longer
	contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Microsoft Data Access Components 2.5 Service Pack 2 and Microsoft Windows 2000
	Service Pack 2.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Microsoft Access, create a password protected database named
	  C:\Password.mdb on a computer that has Microsoft Access 2000 and Microsoft
	  Data Access Components (MDAC) 2.5 installed.
	
	2. Double-click Password.mdb and note that a Password dialog box appears.
	
	3. Type in your password and press ENTER. You should be able to open the
	  database.
	
	4. Open the ODBC Data Source Administrator in Control Panel and click the Add
	  button.
	
	5. Select "Microsoft Access Driver (*.mdb)," and then click Finish.
	
	6. Click the Advanced... button and enter your password in the Password dialog
	  box. Click OK.
	
	7. Click the Repair... button and select the database file created in step 1,
	  and then click OK.
	
	Note that the following error message occurs:
	
	  "Not a valid password"
	
	REFERENCES
	----------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q270638 BUG: Database Compaction with SQLConfigDataSource Fails when Access
	  Database is Password Protected
	
	Additional query words: passworded
	
	======================================================================
	Keywords          : kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbMDAC250bug kbMDAC250SP1bug kbWin2000SP2Fix kbMDAC250SP2fix 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC250SP1 kbMDAC250 kbODBCAccess400
	Version           : :2.5,2.5 SP1,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
