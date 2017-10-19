---
layout: page
title: "Q160718: SMS Does Not Report BIOS Information on Windows NT Systems"
permalink: /kb/160/Q160718/
---

## Q160718: SMS Does Not Report BIOS Information on Windows NT Systems

	Article: Q160718
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbInventory smsinvkbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Systems Management Server inventories MS-DOS systems, the BIOS information
	is reported. However, Systems Management Server currently does not report the
	BIOS information for systems running Windows NT.
	
	CAUSE
	=====
	
	Systems Management Server collects inventory properties for computers running
	Windows NT by examining the system registry. With Windows NT 3.1 and 3.5, the
	system BIOS was not reported in the registry, and Systems Management Server
	could not query the BIOS directly due to the hardware abstraction that is a part
	of Windows NT. Since the BIOS information was not available, Systems Management
	Server was not designed to report BIOS information on computers running Windows
	NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available for version 1.2
	only, but has not been fully regression-tested and should be applied only to
	systems experiencing this specific problem. Unless you are severely impacted by
	this specific problem, Microsoft recommends that you wait for the next Service
	Pack that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	MORE INFORMATION
	----------------
	
	With Windows NT 4.0 and above, the BIOS information is reported in the registry.
	The registry value that Systems Management Server will query is located in
	\\HKEY_LOCAL_MACHINE\Hardware\Description\System.
	
	With the hotfix installed, Systems Management Server will query the new registry
	values SystemBiosVersion and SystemBiosDate. If the values exist, Systems
	Management Server will report the BIOS information contained in the registry.
	
	The current Systems Management Server Windows NT Inventory Processor cannot
	report the BIOS information directly, due to the current architectural
	limitation in the RAW file format. To work around this current limitation, the
	BIOS information is written to the Noidbios.mif file, located in the client's
	MS\SMS\Noidmifs directory. This information will then be collected by the
	standard Inventory Agent file collection process, and reported to the site
	server.
	
	Additional query words: PC BIOS
	
	======================================================================
	Keywords          : kbinterop kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
