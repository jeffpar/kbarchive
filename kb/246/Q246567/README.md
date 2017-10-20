---
layout: page
title: "Q246567: XADM: LDAP Searches on Home-MDB Not Returned Properly"
permalink: /kb/246/Q246567/
---

## Q246567: XADM: LDAP Searches on Home-MDB Not Returned Properly

{% raw %}

	Article: Q246567
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Lightweight Directory Access Protocol (LDAP) searches on either the Home-MDB
	attribute or the Home-MTA attribute are not returned properly in sites
	containing multiple Exchange Server 5.5 computers. With a paged LDAP search, you
	can properly return objects when the number of objects is below the LDAP server
	limit (default is 100). If the number of objects exceeds the limit, the search
	returns nothing.
	
	CAUSE
	=====
	
	In the internals of the directory, when a paged search is performed, the
	directory first attempts to see if the total number of objects is more than the
	page size. If not, it just returns the elements and says it is done. If the
	number is bigger, the directory performs the search again. Unfortunately, the
	directory attempts to reconvert the filter back to the internal form. For text
	and numeric based attributes, this is fine as the directory just does no-ops for
	each value. However, for distinguished names (DNs) and organizational names, the
	directory attempts to convert the already converted data. The directory corrupts
	the filter, the second search does not find any objects, and you get zero
	results.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The following is a script that works properly when you do a single server
	query:
	
	  srvname = "myserver"
	  userDN = "LDAP://" & srvname 
	     
	  Set ADOConn = CreateObject("ADODB.Connection")
	  Set adoCom2 = CreateObject("ADODB.Command")
	  ADOConn.Provider = "ADSDSOObject"
	  ADOConn.Open "Active Directory Provider"
	      
	  Set adoCom2.ActiveConnection = ADOConn
	  adoCom2.CommandText = "<" & userDN & ">;(home-mdb=*);cn;subtree"
	  adoCom2.Properties("Page Size") = 16
	  adoCom2.Properties("Timeout") = 1 
	  Set RS2 = adoCom2.Execute
	  If ADOConn.Errors.Count > 0 Then
	    For Each i In ADOConn.Errors
	       MsgBox "Error: " & i.Description
	    Next
	  End If
	
	  MsgBox "Recipients :" & RS2.RecordCount
	     
	  Set adoCom2 = Nothing
	  Set RS2 = Nothing
	  Set rs = Nothing
	
	The following is an example of a script that fails:
	
	  srvname = "myserver"
	  userDN = "LDAP://" & srvname 
	      
	  Set ADOConn = CreateObject("ADODB.Connection")
	  Set adoCom2 = CreateObject("ADODB.Command")
	  ADOConn.Provider = "ADSDSOObject" 
	  ADOConn.Open "Active Directory Provider"
	      
	  Set adoCom2.ActiveConnection = ADOConn
	  adoCom2.CommandText = "<LDAP://MYSERVER>;(home-mdb='cn=Microsoft Private MDB,cn=MYMACHINE,cn=Servers,cn=Configuration,ou=MYDOMAIN,o=Microsoft');cn,adspath;subtree"
	
	  adoCom2.Properties("Page Size") = 16
	  adoCom2.Properties("Timeout") = 1 
	  Set RS2 = adoCom2.Execute
	
	  If ADOConn.Errors.Count > 0 Then
	     For Each i In ADOConn.Errors
	        MsgBox "Error: " & i.Description
	     Next
	  End If
	
	  If RS2.EOF And RS2.BOF Then
	      MsgBox "EOF & BOF true"
	  End If
	    
	  MsgBox "Recipients :" & RS2.RecordCount
	         
	  Set adoCom2 = Nothing
	  Set RS2 = Nothing
	  Set rs = Nothing
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
