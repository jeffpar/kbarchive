---
layout: page
title: "Q84978: LBChange.exe Simulates Changing List Box Style"
permalink: /kb/084/Q84978/
---

## Q84978: LBChange.exe Simulates Changing List Box Style

	Article: Q84978
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The windows styles specified when an application creates a list box are fixed
	throughout its lifetime. LBChange.exe is a sample in the Microsoft Download
	Center that demonstrates how to use two list boxes to simulate changing the
	style of a list box.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  LBChange.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When it creates a new window, Windows stores window style information in several
	internal data structures. Windows refers to these data structures when it
	performs window management tasks, including painting the window.
	
	If an application calls the SetWindowLong() function to change the window style
	dynamically, the new information is not reflected in the internal data
	structures. For example, an application can't effectively change a list box from
	the single selection style to the multiple selection style.
	
	An application can work around this situation in two different ways:
	
	- Create two list boxes with different styles. The application shows the list
	  box with the desired style and hides the other.
	
	- Destroy the existing list box and create a new list box in its place.
	
	The LBCHANGE sample demonstrates the first method, which is simple to implement
	and runs efficiently. However, this method requires memory space to store two
	copies of the list box contents.
	
	Although the second method uses memory more efficiently, it requires more work to
	implement. If the application changes the list box style often, managing the
	contents of the list box by saving and reloading the contents and tracking the
	selected items can become quite involved.
	
	Additional query words: listbox
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
