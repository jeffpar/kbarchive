---
layout: page
title: "Q200879: SMS: Resource Explorer Doesn't Show Readable  Inventory Values"
permalink: /kb/200/Q200879/
---

## Q200879: SMS: Resource Explorer Doesn't Show Readable  Inventory Values

{% raw %}

	Article: Q200879
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resource Explorer does not show text values of various inventory information on
	clients recorded by the Hardware Inventory agents.
	
	For example, run Resource Explorer on Systems Management Server 2.0 Administrator
	console by expanding the Collections node, highlight any populated collection
	and right-click (or Action menu) on a client:
	
	1. Go to the Hardware Inventory folder and double-click the Keyboard subfolder.
	  The layout value displays as "00000409" instead of "English (United States)."
	
	2. Go to the Hardware Inventory folder and double-click the Disk Partitions
	  subfolder. The Bootable and Boot Partition values display as either "1" or
	  "0" instead of Yes or No.
	
	Systems Management Server providers should replace the results with the
	equivalent enumerated values. To do this, however, the server Managed Object
	Format (MOF) would have to be updated to include the various enumerations, and
	the Provider would have to make the relevant substitutions when passing this
	information to the Resource Explorer to be displayed.
	
	These changes require additional infrastructure modifications which will not be
	provided in the initial release of Systems Management Server version 2.0.
	Support for this type of enumeration will be available in a future release.
	
	MORE INFORMATION
	================
	
	Here's an example from the CIMWin32.mof :
	
	  class CIM_PointingDevice:CIM_UserDevice
	  {
	
	          [read,
	          Values {"Unknown", "Not Applicable", "Right Handed Operation",
	          "Left Handed Operation"} ]
	      uint16 Handedness;
	          [read]
	      uint8 NumberOfButtons;
	          [read, ValueMap {"1", "2", "3",
	          "4", "5", "6", "7", "8"} , Values {"Other", "Unknown", "Mouse",
	          "Track Ball", "Track Point", "Glide Point", "Touch Pad", "Touch          Screen"
	          } , MappingStrings {"MIF.DMTF|Pointing Device|001.1"} ]
	      uint16 PointingType;
	          [read]
	      uint32 Resolution;
	
	  };
	
	In this example, the integer values 0-3 reported for
	CIM_PointingDevice::Handedness by the hardware inventory agent, need to be
	substituted with "Unknown", "Not Applicable", "Right Handed Operation", or "Left
	Handed Operation" by the Systems Management Server Provider.
	
	There is currently no mechanism for transferring the qualifiers in the
	CIMWin32.mof to the class definitions exposed in the Systems Management Server
	provider hence the Resource Explorer has no way of getting this information. If
	we added these qualifiers to the Sms_defs.mof file, it would then be possible to
	do this kind of transfer. Furthermore, changes are needed in the Systems
	Management Server to provide this type of transfer along with changes to the
	Resource Explorer to translate the qualifiers listed above in a way to turn
	integers into strings.
	
	Additional query words: prodsms smsui SDK res expl RE
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
