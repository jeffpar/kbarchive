---
layout: page
title: "Q216738: SMS: WMI Terms and Concepts"
permalink: kb/216/Q216738/
---

## Q216738: SMS: WMI Terms and Concepts

	Article: Q216738
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Management Instrumentation (WMI), the Microsoft implementation for Web
	Based Enterprise Management (WBEM), is an integral component of Systems
	Management Server version 2.0.
	
	This article provides a very simplistic introduction to WMI for the Systems
	Management Server administrator and defines basic terms and concepts necessary
	to know when you manage one or more Systems Management Server sites.
	
	MORE INFORMATION
	================
	
	WBEM is a unifying architecture that allows access to data from a variety of
	underlying technologies - including Win32, WMI, the Desktop Management Interface
	(DMI), and the Simple Network Management Protocol (SNMP). WBEM is based upon the
	Common Information Model (CIM) schema, which is an industry standard driven by
	the Desktop Management Task Force (DMTF).
	
	The Systems Management Server Site Database, Administrator Console and the Client
	Hardware Inventory component all depend on WMI.
	
	WBEM provides a three-tiered approach for collecting and providing management
	data. This approach consists of a standard mechanism for storing data (a
	CIM-compliant database), a standard protocol for obtaining and disseminating
	management data (COM/DCOM; other protocols are also possible and under
	investigation), and a Win32 DLL known as a WBEM provider.
	
	CIM and CIMOM
	-------------
	
	A component of the CIM (Common Information Model) is the CIMOM (Common
	Information Model Object Manager) repository. This datastore is where providers
	determine how to retrieve their information.
	
	Although not technically accurate, it helps to think of the CIMOM in terms of a
	database. Definitions of WMI terms, and the corresponding concept in database
	terminology are in the following list.
	
	  WBEM term    WBEM definition                    Database term
	  -------------------------------------------------------------
	  Namespace    A collection of all classes.       Database
	
	  Class        Describes datatypes in a
	               schema. Object class definition.   Table
	  Properties   A single attribute of a class.     Column
	  Instance     One object of this class type.     Row
	  Value        The data for a property of a       Field
	               specific instance.
	
	Providers and WBEM
	------------------
	
	A WBEM provider supplies instrumentation data for parts of the CIM schema.
	Microsoft has written the WMI provider (a WBEM provider) that interfaces with
	the kernel mode WMI component. The kernel mode WMI component provides services
	that allow WMI-enabled drivers to implement WMI, and also acts as an interface
	to the WMI provider.
	
	Systems Management Server uses the SMS Site Provider as the mechanism between the
	SMS Administrator's Console and the site server's SQL database. The Systems
	Management Server Hardware Inventory Client component uses the WMI Win32
	provider.
	
	The specifications for writing a WBEM provider are available for free, as well as
	code examples. Microsoft recommends that an IHV or OEM that manufactures
	hardware and software for end users such as a still-image scanner or a printer,
	write a WBEM provider. We recommend the IHV or OEM implement the WMI provider
	for kernel components.
	
	For additional information about WMI and WBEM:
	
	  http://www.microsoft.com/HWDev/MANAGEABILITY/default.htm
	
	  http://www.microsoft.com/servers/
	
	  http://msdn.microsoft.com/developer/sdk/wmisdk/default.asp
	
	Additional Resources for Systems Management Server 2.0:
	
	Systems Management Server 2.0 SDK
	Systems Management Server Resource Guide, Back Office Resource Kit vol 4.5,
	Chapter 10, "WMI and the Hardware Inventory Process".
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
