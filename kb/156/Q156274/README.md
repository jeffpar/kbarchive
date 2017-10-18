---
layout: page
title: "Q156274: XADM: Saving Changes to Customized Templates"
permalink: kb/156/Q156274/
---

## Q156274: XADM: Saving Changes to Customized Templates

	Article: Q156274
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After updating to Service Pack 2, customization details of templates are lost.
	This will also happen if you reinstall Microsoft Exchange Server.
	
	WORKAROUND
	==========
	
	Export the customized templates to a .csv file before upgrading and import them
	afterward.
	
	1. Copy Tpl.csv and Tpl.ini to the root of drive C from the Microsoft Exchange
	  Server compact disc Support\Samples\Csvs\Tpl folder.
	
	2. At a command prompt perform ATTRIB Tpl.csv and Tpl.ini to remove the read
	  only attribute from them.
	
	3. Modify the Tpl.ini file to include references to your organization and site
	  under export and import.
	
	     [export]
	     ExportObject=All
	     Subcontainers=Yes
	     Basepoint=/o=ORG/ou=SITE/cn=Configuration/cn=Addressing
	     Container=Display-Templates
	
	     [import]
	     Basepoint=/o=ORG/ou=SITE/cn=Configuration/cn=Addressing
	     Container=Display-Templates
	     OverwriteProperties=Yes
	
	4. Export the customized details templates using the following command line from
	  the root:
	
	"c:\exchsrvr\bin\admin.exe /e c:\tpl.csv /o c:\tpl.ini" (without the quotation
	marks)
	
	5. The customizations are now available for import when needed with the
	  following command:
	
	"c:\exchsrvr\bin\admin.exe /i c:\tpl.csv /o c:\tpl.ini" (without the quotation
	marks)
	
	STATUS
	======
	
	This problem was first corrected in Exchange Server 4.0 Service Pack 3.
	
	Additional query words: custom
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
