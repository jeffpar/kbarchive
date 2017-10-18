---
layout: page
title: "Q257989: HOWTO: Pin and Unpin Files in VSS from OLE Automation in VC++"
permalink: kb/257/Q257989/
---

## Q257989: HOWTO: Pin and Unpin Files in VSS from OLE Automation in VC++

	Article: Q257989
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE Automation for Visual SourceSafe does not directly expose the pinning
	functionality. You can use the functions in the "More Information" section of
	this article to pin and unpin a file from a Visual C++ program.
	
	NOTE: This sample code assumes that you reference the Visual SourceSafe OLE
	Automation by using this code:
	
	  #import "path to ssapi.dll" no_namespace
	
	MORE INFORMATION
	================
	
	This function pins a file:
	
	  int PinFile(IVSSItemPtr objItem, int version)
	  {
	     // Pinning code
	     IVSSItemPtr    objOldItem;
	     IVSSItemPtr    objProject;
	     CComVariant    varVer;
	
	     varVer = version;
	
	     objOldItem = objItem->GetVersion(varVer);
	     objProject = objItem->GetParent();
	
	     objProject->Share(objOldItem, "", 0);
	
	     return 1;
	  }
	
	This function unpins a file:
	
	  int UnpinFile(IVSSItemPtr objItem)
	  {
	     // Unpinning code
	     IVSSItemPtr    objOldItem;
	     IVSSItemPtr    objProject;
	     CComVariant    varVer = 0;
	
	     objOldItem = objItem->GetVersion(varVer);
	     objProject = objItem->GetParent();
	
	     objProject->Share(objOldItem, "", 0);
	
	     return 1;
	  }
	
	REFERENCES
	==========
	
	For more information, see the Visual SourceSafe 6.0 Automation topic on the
	following MSDN Web site at:
	
	  http://msdn.microsoft.com/library/techart/vssauto.htm
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q257990 HOWTO: Obtain a List of All Pinned Files from OLE Automation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
