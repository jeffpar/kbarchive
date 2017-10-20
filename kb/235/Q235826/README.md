---
layout: page
title: "Q235826: SMS: Error Message 2703 Indicating That Valid MIFs Are Corrupted"
permalink: /kb/235/Q235826/
---

## Q235826: SMS: Error Message 2703 Indicating That Valid MIFs Are Corrupted

{% raw %}

	Article: Q235826
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbMMC kbsms200 kbsms200bug kbCollections kbDataLoader kbDiscovery k
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your Systems Management Server site server, you may receive an error message
	similar to the following:
	
	  SMS Inventory Data Loader failed to process the delta MIF file
	  "XILPYXLAT.MIF" and has moved it to
	  "D:\SMS\inboxes\dataldr.box\BADMIFS\IBNQWXY4.MIF".
	
	  Possible cause: The file is corrupt or contains bad syntax. Solution: Review
	  the immediately preceding status messages from this component for more
	  details.
	
	  If you ignore this problem, SMS will probably fix it and complete this
	  operation later. If this error occurs repeatedly, refer to your SMS
	  documentation or the Microsoft Knowledge Base for further troubleshooting
	  information.
	
	The file name for the Management Information File (MIF) may be unique for your
	site and may not match this error message exactly.
	
	CAUSE
	=====
	
	This behavior can occur if the Data Discovery Record (DDR) for the client
	reporting the MIF is missing.
	
	When SMS_INVENTORY_DATA_LOADER begins to process a delta MIF, it checks to
	determine whether there is a current discovery record for the client. If there
	is no discovery record for that particular client, SMS_INVENTORY_DATA_LOADER
	generates a record based on the information contained in the MIF.
	
	However, the MIF includes only key properties, and IP subnet and IPX network
	number are not considered key properties. Therefore, the new discovery record
	does not include any IP subnets or IPX network numbers. As a result, the
	discovery record indicates that the client is not assigned to any sites.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Locate the MIF file in the SMS\Inboxes\Dataldr.Box\Badmifs folder on your
	  site server.
	
	2. Open the MIF with any text editor and locate the NetBIOS name of the computer
	  that is generating this error.
	
	3. Remove (uninstall) the SMS client software from the affected computer and
	  allow Systems Management Server to rediscover the client.
	
	4. Use your preferred method to reinstall the SMS Client components.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbDatabase kbMMC kbsms200 kbsms200bug kbCollections kbDataLoader kbDiscovery kbInventory kbsmsAdmin kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
