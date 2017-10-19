---
layout: page
title: "Q217183: FIX: GetPropertyInfo Not Returning Correct Values for Default Ca"
permalink: /kb/217/Q217183/
---

## Q217183: FIX: GetPropertyInfo Not Returning Correct Values for Default Ca

	Article: Q217183
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0,6.0 SP3; winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbProvider kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio, Enterprise Edition versions 6.0, 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating an OLE DB Provider with the ATL Wizard in Visual C++ 6.0, the
	IDBProperties::GetPropertyInfo returns all of the DATASOURCEINFO properties
	rather than the initialization properties; also, the GUID returned in the
	DBPROPINFOSET structure is DBPROPSET_DBINITALL.
	
	CAUSE
	=====
	
	This problem is caused by a bug in IDBPropertiesImpl::GetPropertyInfo(),
	implemented in the ATL OLE DB header file Atldb.h.
	
	RESOLUTION
	==========
	
	Install Visual Studio Service Pack 3 to get a corrected version of Atldb.h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	According to the OLE DB documentation:
	
	  If cPropertyIDSets is zero, the provider ignores rgPropertyIDSets. When
	  called on the enumerator, the provider returns information about all
	  properties in the Initialization property group. When called on the data
	  source object, if the data source object has not been initialized, the
	  provider returns information about all properties in the Initialization
	  property group.
	
	  Also regarding the GUID returned in DBPROPINFOSET and the special GUIDs like
	  DBPROPSET_DBINITALL:
	
	  These GUIDs are not returned in the guidPropertySet element of the
	  DBPROPINFOSET structures returned in rgPropertyInfoSets. Instead, the GUID of
	  the property set to which the property belongs is returned.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL COM project using the ATL COM AppWizard, and accept all
	  default settings.
	
	2. From the Insert menu, click New ATL Object.
	
	3. Select Data Access in the left pane, then Provider in the list of objects.
	
	4. Give the object a name.
	
	5. Save and compile the project.
	
	6. Debug the project and when asked for an executable, specify ITest.exe from
	  the MS Data Access SDK (MSDASDK). If you need to install the MSDASDK, it can
	  be found on CD 2 of Visual C++ or Visual Studio, under the DASDK directory.
	
	7. Once ITest is running, right-click Win32[oledb Providers] and select
	  CoCreateInstance.
	
	8. Double-click the Value column of the first row to activate a drop down list
	  of providers.
	
	9. Select your provider from the list.
	
	10. Select the ICW menu and then Execute.
	
	11. Right-click your provider in the Object window and select IDBProperties and
	  then GetPropertInfo from the sub-menu.
	
	12. Ensure that cPropertyIDSets is set to 0 (zero).
	
	13. Allocate memory for pcPropertyInfoSets by right-clicking the Value column
	  and selecting AllocateMemory from the context menu.
	
	14. Ensure prgPropertInfoSets and ppDescBuffer have memory allocated; you should
	  see &NULL rather than NULL.
	
	15. Select the ICW menu and then Execute.
	
	16. Look at the results in the Output window.
	
	RESULTS: You will get back all of the DATASOURCEINFO properties rather than the
	initialization properties; also, the GUID returned in the DBPROPINFOSET
	structure is DBPROPSET_DBINITALL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbProvider kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix kbGrpDSVCDB kbVS600SP1bug 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVS600SP3 kbVS600 kbVS600Search
	Version           : WINDOWS:6.0,6.0 SP3; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
