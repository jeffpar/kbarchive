---
layout: page
title: "Q245058: XADM: Information Store Service Specific Error 4294966264"
permalink: /kb/245/Q245058/
---

## Q245058: XADM: Information Store Service Specific Error 4294966264

{% raw %}

	Article: Q245058
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start the Information Store service by using Services in Control Panel,
	the following error message may be displayed:
	
	  The Microsoft Information Store service returned service specific error
	  4294966264
	
	The following events are logged in the application event log:
	
	  Event ID: 145
	  Source: ESE97
	  Category: General
	  Type: Error
	  Description:
	  MSExchangeIS The database engine could not access the file call "directory
	  path"\EDB.chk
	
	  Event ID: 145
	  Source: ESE97
	  Category: General
	  Type: Error
	  Description:
	  MSExchangeIS The database engine could not access the file call "directory
	  path"\EDB.log
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Category: General
	  Type: Error
	  Description:
	  Error 0xfffffbf8 initializing the Microsoft Exchange Information Store
	  database
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Category: General
	  Type: Error
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store database Error
	  0xfffffbf8
	
	This issue can also happen if the PRIV.EDB is marked with a read-only attribute.
	
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server service account does not have Write
	permission to the Priv.edb file. The ability to write to this file can be
	restricted by insufficient NTFS file system (NTFS) rights to the PRIV.EDB file,
	or by a read-only file attribute applied to the PRIV.EDB file.
	
	RESOLUTION
	==========
	
	To resolve this issue, give full access rights to the Exchange Server service
	account for the directory that the Priv.edb file is in:
	
	1. Start Windows NT Explorer.
	
	2. Right-click the Exchsrvr\Mdbdata folder, and then click Properties.
	
	3. Click the Security tab, and then click Permissions.
	
	4. Click either the group Everyone or "Exchange service account".
	
	5. In the list, select Full Control.
	
	6. Click to select the "Replace Permissions on Subdirectories" check box and the
	  "Replace Permissions on Existing Files" check box.
	
	7. Click OK, and then click Yes.
	
	8. Verify that PRIV.EDB file has not been marked "Read Only".
	
	9. Navigate into the Exchsrvr\Mdbdata folder.
	
	10. Right-click the PRIV.EDB file, and then click Properties.
	
	11. On the General tab, ensure that the "Read Only" attribute is not checked.
	
	12. Click OK to close the Properties dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
