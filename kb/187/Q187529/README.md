---
layout: page
title: "Q187529: HOWTO: Use ADO to Access Objects Through an ADSI LDAP Provider"
permalink: /kb/187/Q187529/
---

## Q187529: HOWTO: Use ADO to Access Objects Through an ADSI LDAP Provider

	Article: Q187529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.5,2.0,2.1 SP2,2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtophit kbADO150 kbADO200 kbADSI kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbADO210sp2
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Active Directory Service Interfaces, version 2.0 
	- ActiveX Data Objects (ADO), versions 1.5, 2.0, 2.1 SP2, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Active Directory Service Interfaces (ADSI) Lightweight Directory Access
	Protocol (LDAP) provider implements OLE DB interfaces that allow you to use
	ActiveX Data Objects (ADO) to access objects in LDAP compliant directories. You
	must create an ADO connection object and set its Provider property to
	"ADsDSOObject". You can specify any string, including "", as the connection
	string (first argument) of the ADO connection object's open method.
	
	The connection object Execute method's CommandText (first object) is an LDAP
	query composed of four elements separated by semicolons, in the following
	format:
	
	     <LDAP://server/adsidn>;ldapfilter;attributescsv;scope
	
	where:
	
	- server is the name (or IP address) of the server hosting the directory.
	
	- adsidn is the distinguished name (DN) of the starting point for your query
	  expressed ADsPath format with "/" separators and the root of the namespace to
	  the left. You can also use an X.500 style attributed name format with the
	  relative distinguished names separated by commas and the root of the name
	  space to the right.
	
	- 1dap filter is the LDAP filter string (see rfc2254).
	
	- attributescsv is a comma separated list of names of the attributes to be
	  returned for each row in the recordset.
	
	- scope is either: base, onelevel, or subtree.
	
	NOTE: rfc2253 specifies the LDAP syntaxes on which the ADSI LDAP syntax is
	based.
	
	To return the ADsPath, class, and cn attributes of all the objects in all the
	recipient containers in an Exchange server, you can use the following
	CommandText (in URL format):
	
	        LDAP:<//server/o=organization/ou=site/cn=recipients>;
	           (objectClass=*);ADsPath,objectClass,cn;subtree"
	
	or (in attributed name format):
	
	       <LDAP://server/cn=recipients,ou=site,o=organization>, _
	           (objectClass=*);ADsPath,objectClass;subtree
	
	MORE INFORMATION
	================
	
	The following Visual Basic sample code illustrates this query:
	
	Sample Code
	-----------
	
	    Dim conn As ADODB.Connection
	        Dim rs As ADODB.Recordset
	
	        Set conn = New ADODB.Connection
	        conn.Provider = "ADSDSOObject"
	        conn.Open "ADs Provider"
	
	        Set rs = conn.Execute( _ 
	              "<LDAP://server/o=organization/ou=site/cn=recipients>; _
	              (objectClass=*);ADsPath,objectClass,cn;subtree")
	
	        While Not rs.EOF
	           Debug.Print rs.Fields(0).Value, rs.Fields(1).Value, _
	                 rs.Fields(2).Value
	           rs.MoveNext
	        Wend
	
	        conn.Close
	
	REFERENCES
	==========
	
	For a listing and explanation of common LDAP RFCs, including RFC 2253 and RFC
	2254, please see the following article in the Microsoft Knowledge Base:
	
	  Q221606 Common LDAP RFCs
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q275917 PRB: ADSI 2.5 and MDAC 2.6 Compatibility Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtophit kbADO150 kbADO200 kbADSI kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbADO210sp2 kbADO250 kbMDACNoSweep kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO150 kbADO200 kbADO210sp2 kbADO250 kbZNotKeyword6 kbADSISearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbADSI200
	Version           : :1.5,2.0,2.1 SP2,2.5,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
