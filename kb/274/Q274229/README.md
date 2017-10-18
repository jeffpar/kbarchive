---
layout: page
title: "Q274229: XADM: How to Copy Exchange Attributes from One AD to Another"
permalink: kb/274/Q274229/
---

## Q274229: XADM: How to Copy Exchange Attributes from One AD to Another

	Article: Q274229
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	WARNING: If you use the ADSI Edit snap-in, the LDP utility, or any other LDAP version 3 client and incorrectly modify the attributes of Active Directory objects, you can cause serious problems that may require you to reinstall Microsoft Windows 2000 Server and/or Microsoft Exchange 2000 Server. Microsoft cannot guarantee that problems resulting from the incorrect modification of Active Directory object attributes can be solved. Modify these attributes at your own risk.
	
	SUMMARY
	=======
	
	At times it may become necessary to copy msExchange attributes from one Active
	Directory object to another. Examples of this would be the msExchADCGlobalNames
	attribute, the msExchHomeServerName attribute, or the HomeMDB attribute. This
	article explains how to do so.
	
	MORE INFORMATION
	================
	
	To Copy msExchange Attributes from one Active Directory Object to Another
	-------------------------------------------------------------------------
	
	1. Using the Active Directory Administration Tool (Ldp.exe), dump the attribute
	  values from the Active Directory object that has the correct information into
	  a text file. Below are sample values for the msExchADCGlobalNames attribute:
	
	  forest:o=Microsoft000000006015B645161DC001;
	  EX5:cn=JamesW,cn=Recipients,ou=CUBICSTONE,
	  o=Microsoft:organizationalperson$person$top000000006015B645161DC001;
	
	2. Start the Active Directory Administration Tool.
	
	3. On the Connection menu, click Connect.
	
	4. Enter the server name, enter "Port:3268" (without the quotation marks) for
	  the Global Catalog, and then enter "Port:389" (without the quotation marks)
	  for Active Directory. Click OK.
	
	5. On the Connection menu, click Bind.
	
	6. Enter the logon credentials of an administrator with the necessary
	  permissions to complete the task, and then click OK.
	
	7. On the View menu, click Tree. Leave BaseDN blank, and then click OK.
	
	8. Locate, and open the appropriate container that is housing the objects you
	  wish to modify.
	
	9. On the Connection menu, click New.
	
	10. Double-click the object with the correct values for the attribute to be
	  modified.
	
	11. On the Connection menu, click "Save as". Enter a file name, and destination
	  to save the file.
	
	  If the destination Active Directory object has values for the attribute to be
	  modified, using ADSI Edit, remove the values of the attribute:
	
	  a. Start ADSI Edit.
	
	  b. Under the Domain NC, locate and open the appropriate container that is
	     housing the objects to be modified.
	
	  c. Right-click the object, and then click Properties.
	
	  d. On the Attributes tab, in the "Select a Property to view" drop-down box,
	     click the property to be modified, and then click Clear.
	
	     NOTE: You will want to copy this out to a .doc or .txt file so that you can
	     have the original values in case they need to be restored.
	
	12. Using ADSI Edit, copy the attribute values from the text file into the
	  attribute of the Active Directory object to be modified. Although it appears
	  to be one string, there may be two or more values, each ending with a
	  trailing semicolon (;). Each value should be entered separately, omitting
	  the semicolon.
	
	13. Using Ldp.exe, connect to the Global Catalog, and view the original and
	  modified Active Directory objects to make sure that the attributes are
	  identical.
	
	Additional query words: AD
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
