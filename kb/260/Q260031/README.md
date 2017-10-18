---
layout: page
title: "Q260031: Error Message Generated when Exporting Foreign Users to Exchange"
permalink: kb/260/Q260031/
---

## Q260031: Error Message Generated when Exporting Foreign Users to Exchange

	Article: Q260031
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool MMS
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Microsoft Exchange LDAP management Agent, you may receive the
	following error message in the operator's log during the process of Updating the
	Connected Directory's Foreign Users
	
	  Invalid addition response: 21 - INVALID ATTRIBUTE SYNTAX for object
	  cn=<user name>,cn=Exchangecontainer,cn=recipients,ou=site,o=org
	
	where <user name> is a name with an apostrophe, such as John O'Neil.
	
	CAUSE
	=====
	
	This issue can occur because the templates use a $unquote() function with the
	second parameter set to 1. Because of this, quotation marks and apostrophes are
	removed. When a name contains an apostrophe (for example, O'Neil), the
	apostrophe is removed from the Relative Distinguished Name (RDN) but the
	Distinguished Name (DN) still contains the apostrophe. The problem occurs
	because Exchange needs the RDN and the DN of the entry to match exactly. When
	these values do not match, the user is not permitted to be imported and the
	error message is recorded in the operator's log.
	
	RESOLUTION
	==========
	
	To resolve this issue, edit the Crt.st file and the Exp.st file by changing the
	value of the second parameter of the $unquote() function from 1 to 0:
	
	1. Select the MA where the problem is occurring.
	
	2. Click Properties to view the Properties dialog box.
	
	3. Click the Record Templates tab.
	
	4. Click "Record this MA's templates to it's Working Directory".
	
	5. In the MA's working directory, edit the following files:
	
	  Crt.st
	  Exp.st
	
	  Change the following syntax from
	
	  "$v_rdn = $unquote($v_rdn, 1)"
	
	  to
	
	  "$v_rdn = $unquote($v_rdn, 0)"
	
	  NOTE: If you are unfamiliar with the storage locations of the template files
	  listed above, click the "Intermediate Files and Logs" tab in Management Agent
	  Properties. The files and their locations are located in the Working
	  Directory tab.
	
	6. Click to select the ""Update this MA from its working directory's templates
	  located at: DirPath"." check box in the properties of the Management Agent
	  Recording Template tab.
	
	7. Click Update Management Agent on the Action Panel to update the management
	  agent based on the templates you modified in the working directory.
	
	8. Click Operate MA, run the MA again, and then check the operator logs to
	  verify that the error message is not generated.
	
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          : kberrmsg kbtool MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
