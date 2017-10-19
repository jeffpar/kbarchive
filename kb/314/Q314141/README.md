---
layout: page
title: "Q314141: SMS: Hardware Inventory Limited to Root&#92;Cimv2 and Root&#92;Cimv2&#92;Sms"
permalink: /kb/314/Q314141/
---

## Q314141: SMS: Hardware Inventory Limited to Root&#92;Cimv2 and Root&#92;Cimv2&#92;Sms

	Article: Q314141
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 smsinst
	Last Modified: 10-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Hardware Inventory client component that is included with Systems Management
	Server (SMS) cannot obtain information from classes outside of the Root\Cimv2 or
	Root\Cimv2\Sms namespaces.
	
	WORKAROUND
	==========
	
	Windows Management Instrumentation (WMI) version 1.5 includes a View provider.
	This provider can provide instances in a user-defined class that is based on the
	instance data of a class or classes in another namespace. You can use the View
	provider to create a new class in the Root\Cimv2 or Root\Cimv2\Sms namespace
	that provides instance data that is generated from the instance data of a class
	that may be located in an alternate namespace.
	
	For more information about the WMI View provider, see the WMI SDK that is
	included in the Microsoft Platform SDK.
	
	MORE INFORMATION
	================
	
	The Root\Cimv2 namespace is the default namespace that is used by the SMS
	Hardware Inventory client component to obtain instance information for a given
	class. To specify that a class is located in the Root\Cimv2\Sms namespace, you
	must place the SMS_Namespace qualifier on the corresponding class instance in
	the Sms_def.mof file. The SMS_Namespace qualifier is documented and used in the
	default Sms_def.mof file.
	
	Creating a Sample Class
	-----------------------
	
	The following sample describes how to create the ABC123View class in the
	Root\Cimv2 namespace to provide instance data from the ABC123 class in the
	Root\Someothernamespace namespace for SMS hardware inventory purposes.
	
	First, for SMS Hardware Inventory to be able to collect the appriate data, place
	the linked class in the Root\Cimv2 or Root\Cimv2\Sms namespace. To create the
	class instance and to use the View provider to link the class instance to the
	class that is contained in the other namespace, add the following information to
	the Sms_def.mof file.:
	
	  
	
	  #pragma namespace("\\\\.\\Root\\CIMV2")
	
	  instance of __Win32Provider as $DataProv
	  {
	   Name = "MS_VIEW_INSTANCE_PROVIDER";
	   ClsId = "{AA70DDF4-E11C-11D1-ABB0-00C04FD9159E}";
	   ImpersonationLevel = 1;
	   PerUserInitialization = "True";
	   
	  };
	
	  instance of __InstanceProviderRegistration
	  {
	   Provider = $DataProv;
	   SupportsPut = True;
	   SupportsGet = True;
	   SupportsDelete = True;
	   SupportsEnumeration = True;
	   QuerySupportLevels = {"WQL:UnarySelect"};
	  };
	
	  [union, ViewSources{"Select * from ABC123"}, ViewSpaces{"\\\\.\\root\\someothernamespace"}, Dynamic : ToInstance, provider("MS_VIEW_INSTANCE_PROVIDER")] 
	  class ABC123View
	  {
	 [PropertySources("Property1") ] sint32 Property1;
	 [PropertySources("Property2"), key ] string Property2;
	 [PropertySources("Property3"), key ] string Property3;
	 [PropertySources("Property4") ] sint32 Property4;
	  };
	
	Then, to instruct the SMS Hardware Inventory client component to collect instance
	data for the new class, create another new class that is derived from
	SMS_Class_Template in the Root\Cimv2\Sms namespace. For this example, add the
	following text to the Sms_def.mof file:
	
	  
	
	  #pragma namespace("\\\\.\\root\\cimv2\\sms")
	  [SMS_Report(TRUE),
	  SMS_Group_Name("ABC123View"),
	  SMS_Class_ID("MYCOMPANY|ABC123|1.0")]
	  class ABC123View : SMS_Class_Template
	  {
	 [SMS_Report(TRUE),key] 
	 string  Property2;
	
	 [SMS_Report(TRUE),key] 
	 string  Property3;
	
	 [SMS_Report(TRUE)] 
	 sint32 Property1;
	
	 [SMS_Report(TRUE)] 
	 sint32 Property4;
	  };
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP3
	Version           : :2.0,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
