---
layout: page
title: "Q298145: FIX: REPAIR_DB Option Removes Encryption from Access 2000 DB"
permalink: /kb/298/Q298145/
---

## Q298145: FIX: REPAIR_DB Option Removes Encryption from Access 2000 DB

{% raw %}

	Article: Q298145
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1 SP2,2.5,2.5 SP1,2.5 SP2,4.0
	Operating System(s): 
	Keyword(s): kbJET kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbMDACNoSweep
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5, 2.5 SP1, 2.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the SQLConfigDataSource ODBC API call with the REPAIR_DB option on an
	encrypted Microsoft Access database file, the database is properly repaired, but
	the encryption is removed.
	
	CAUSE
	=====
	
	This is a problem in the Microsoft Jet ODBC Drivers (Odbcjt32.dll) that ship
	with Microsoft Data Access Components (MDAC) 2.5 Service Pack 2 and earlier.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next MDAC service pack that contains this fix.
	
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
	
	  Date        Version      Size            File name      Platform
	  ----------------------------------------------------------------
	  12/04/2001  4.0.7412.0   270,608 bytes   Odbcjt32.dll   x86
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the CDaoWorkspace::RepairDatabase function to
	repair the database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code reproduces the problem:
	
	  void Repair(BOOL bEncrypt)
	  {
	  	CString strDBQ = "d:\\NWind.mdb", strSystemDB = "d:\\System.mdw";
	  	CString strAttributes;
	  	strAttributes += "REPAIR_DB=";
	  	strAttributes += strDBQ;
	  	if (bEncrypt)
	  		strAttributes += " ENCRYPT";  // This additional keyword is an optimistic try and has no effect!!
	  	strAttributes += "|";
	  	strAttributes += "SYSTEMDB=";
	  	strAttributes += strSystemDB;
	  	strAttributes += "|";
	  	strAttributes += "EXCLUSIVE=TRUE";
	  	strAttributes += "|";
	  	strAttributes += "|";
	
	  	// Exchange pipes against nulls so the command is interpreted correctly.
	  	for (int i = 0; i < strAttributes.GetLength(); i++)
	  	{
	  		if (strAttributes[i] == '|')
	  			strAttributes.SetAt(i, char(0));
	  	}
	
	  	BOOL b = SQLConfigDataSource(NULL, ODBC_CONFIG_SYS_DSN, "Microsoft Access Driver (*.mdb)",
	  		(LPCSTR) strAttributes);
	  	if (!b)
	  	{
	  		CString strErrorMsg;
	  		for (int i = 1; i <= 8; i++)
	  		{
	  			WORD cbErrorMsg;
	  			DWORD dwErrorCode;
	  			RETCODE r = SQLInstallerError(i, &dwErrorCode, strErrorMsg.GetBuffer(100), 100, &cbErrorMsg);
	  			if (r == SQL_NO_DATA)
	  				break;
	  			strErrorMsg.ReleaseBuffer(cbErrorMsg);
	  			TRACE("Rec: %d: %d, %x (%s)\n", i, r, dwErrorCode, (const char *) strErrorMsg);
	  		}
	
	  		AfxMessageBox("Repair failed!");
	  	}
	  	else
	  		AfxMessageBox("Repair succeeded!");
	  }
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : kbJET kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbMDACNoSweep 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210SP2 kbMDAC250SP1 kbMDAC250 kbODBCAccess400 kbMDAC250SP2
	Version           : :2.1 SP2,2.5,2.5 SP1,2.5 SP2,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
