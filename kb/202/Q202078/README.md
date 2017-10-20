---
layout: page
title: "Q202078: SMS: Controlling IDMIF/NOIDMIF Processing"
permalink: /kb/202/Q202078/
---

## Q202078: SMS: Controlling IDMIF/NOIDMIF Processing

{% raw %}

	Article: Q202078
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbsms200 kbInventory
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 has the capability of restricting what is written
	to the database through IDMIFs and NOIDMIFs; for example, to prevent large MIF's
	from processing and quickly filling the database.
	
	The following changes have been made to the hardware inventory agent in Systems
	Management Server 2.0 to provide greater control on what is written to the
	database:
	
	1. Each NOIDMIF is checked and rejected if it exceeds the "Maximum 3rd Party MIF
	  Size". This defaults to 100 KB, and the absolute maximum is 5 MB.
	
	2. Each IDMIF is checked prior to parsing, and will be rejected if:
	
	  a. The size exceeds the "Maximum 3rd Party MIF Size". This defaults to 100
	     KB, and the absolute maximum is 5 MB.
	
	  b. The IDMIF targets the System Architecture; that is, for example:
	
	  //Architecture <System>
	  //Architecture <Personal Computer>
	
	3. After these preliminary checks, the IDMIF is parsed and will be rejected if a
	  reference is made to an 'Architecture' MIF Group, which contains an
	  'ArchitectureName' Attribute with a value of 'Personal Computer'; that is,
	  for example:
	
	  Start Group
	  Name = 'Architecture'
	  ...
	  Start Attribute
	  Name = 'ArchitectureName'
	  Value = 'Personal Computer'
	  ...
	  End Attribute
	  End Group
	  <BR/><BR/>
	  Start Group
	  Name = 'Architecture'
	  ...
	  Start Attribute
	  Name = 'ArchitectureName'
	  Value = 'System'
	  ...
	  End Attribute
	  End Group
	
	  The following examples of IDMIF architecture Groups are valid and will be
	  processed:
	
	  Start Group
	  Name = 'Architecture'
	  ...
	  Start Attribute
	  Name = 'ArchitectureName'
	  Value = 'Fishing Tackle'
	  ...
	  End Attribute
	  End Group
	
	  or
	
	  Start Group
	  Name = 'SMSTeam'
	  ...
	  Start Attribute
	  Name = 'ArchitectureName'
	  Value = 'Personal Computer'
	  ...
	  End Attribute
	  End Group
	
	NOTE: Rejected MIFs will be moved into a BADMIFs subdirectory on the client.
	
	Additional query words: prodsms hwinv32
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
