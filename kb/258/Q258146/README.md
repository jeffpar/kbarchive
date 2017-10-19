---
layout: page
title: "Q258146: HOWTO: Pin/Unpin files in SourceSafe from OLE Automation in VB"
permalink: /kb/258/Q258146/
---

## Q258146: HOWTO: Pin/Unpin files in SourceSafe from OLE Automation in VB

	Article: Q258146
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE Automation for Visual SourceSafe does not expose the pinning
	functionality directly. This article provides two functions that you can use to
	pin and unpin a file from a Microsoft Visual Basic program.
	
	MORE INFORMATION
	================
	
	The following function pins a file:
	
	  Sub PinFile(objItem As VSSItem, version As Variant)
	      Dim objOldItem As VSSItem
	      Dim objProject As VSSItem
	      
	      Set objOldItem = objItem.version(version)
	      Set objProject = objItem.Parent
	      
	      objProject.Share objOldItem, "", 0
	          
	      Set objOldItem = Nothing
	      Set objProject = Nothing
	  End Sub
	
	The following function unpins a file:
	
	  Sub UnpinFile(objItem As VSSItem)
	      Dim objOldItem As VSSItem
	      Dim objProject As VSSItem
	      Dim version As Variant
	      
	      version = 0
	      Set objOldItem = objItem.version(version)
	      Set objProject = objItem.Parent
	      
	      objProject.Share objOldItem, "", 0
	      
	      Set objOldItem = Nothing
	      Set objProject = Nothing
	      Set version = Nothing
	  End Sub
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Automation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
