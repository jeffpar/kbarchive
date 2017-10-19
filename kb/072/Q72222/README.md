---
layout: page
title: "Q72222: SubApp.exe Shows How to Append Menu Items to Other Apps"
permalink: /kb/072/Q72222/
---

## Q72222: SubApp.exe Shows How to Append Menu Items to Other Apps

	Article: Q72222
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProc k
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SubApp.exe is a sample that demonstrates how to add menu items to another
	Windows-based application to enhance the functionality of an existing
	Windows-based application. You can do this by adding new menu items to the
	target application. The source application that you use to add the new menu
	items can also respond to these menu items when the user selects them.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  SubApp.exe
	  (http://download.microsoft.com/download/platformsdk/sample69/3.1/W31/EN-US/SubApp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To monitor the menu items of another application, the main window of that
	application is subclassed using the SetWindowLong() function. In the new window
	function, WM_SYSCOMMAND messages should be processed to handle the system menu
	items. If the menu items belong to a pop-up menu, WM_COMMAND should be
	processed. All the other messages and unrelated menu messages should be passed
	to the previous window function to maintain the integrity of the target
	application.
	
	After subclassing the target application, new menu items or new pop-up menus can
	be added to it. To add menu items to the system menu or an existing pop-up menu,
	AppendMenu() is called, and to add new pop-up menus, InsertMenu() is called.
	
	To make this process work in all three modes of Windows, a fixed code
	dynamic-link library (DLL) should be used. The DLL should contain the function
	that adds menu items and the new window function for the target application.
	This is because the code associated with such a mechanism must be available at
	all times. Certain EMS (expanded memory specification) memory configurations
	place all code except fixed library code segments in application-specific EMS
	memory. This makes the code availability limited to the application that owns
	the EMS memory. If that code is not available to the target application, it will
	crash under those EMS configurations.
	
	NOTE: For future compatibility, the subclass procedure must be in a DLL for all
	modes.
	
	Care should be taken when assigning ID (identification) values to the new menu
	items. The new ID values should not conflict with the values of the existing
	menu items; otherwise, the old menu items will be disabled. To determine the
	existing ID values of the target application, use SPY.EXE (included with the
	Windows SDK) to monitor WM_MENUSELECT messages when selecting menu items. The
	wParam parameter of WM_MENUSELECT message contains the ID value of the menu item
	selected.
	
	Some applications, such as Microsoft Excel and Microsoft Word for Windows, use
	more than one menu; that is, each application has an option to use a long menu
	or a short one. These applications also allow their users to customize the
	menus. These features could become a problem when subclassing this type of
	application and monitoring new pop-up menus or new menu items.
	
	For example, when subclassing Word for Windows, a new menu item is added under
	the pop-up menu "Utility". Suppose that, when appending the new item, the long
	version of the menu was selected. Later on, if the user changes to the short
	version of the menu, the new added menu item will be lost because Word for
	Windows would load the short version of its menus. To avoid this problem, add
	menu items to the system menu of Word for Windows -- changing the menu version
	does not effect the system menu.
	
	Microsoft Excel and Microsoft Word for Windows can also display the menu items
	selected in a status window at the bottom. For this purpose, these applications
	use the WM_MENUSELECT message. If these applications receive a WM_MENUSELECT for
	a menu item that was not originally a part of their menu, they could crash when
	they refresh the status window. For this reason, in the new window function,
	WM_MENUSELECT messages related to all the new menu items should not be passed to
	the target application's old window function.
	
	If there are a lot of new menu items to be added to an application, cascading
	menus should be used. Such a menu structure can help minimize the number of
	commands on an original pop-up menu of the target application.
	
	As previously stated, there is a sample in the Software Library called SUBAPP
	that demonstrates the feature of adding menu items to another Windows-based
	application. In WinMain of SUBAPP.EXE, FindWindow() is called to get the handle
	of the desired application. If the application is present in the system, its
	main-window is subclassed with a new function and two new menu items are
	appended to its system menu. The new function monitors the messages of the
	target application. If any of those messages relate to the newly added menu
	items, the messages are handled accordingly; otherwise, they are sent to the
	target application's original function.
	
	If, on the other hand, the application is not present, a message hook is
	installed to monitor the execution of the desired application. The message hook
	waits for the WM_PAINT message to arrive for the desired window class.
	
	Upon receiving a WM_PAINT for the desired application, the callback hook function
	subclasses the other application and appends menu items to its system menu. The
	hook function then posts a message to the calling application (SUBAPP.EXE) to
	unhook the message filter, since there is no longer a need for a system message
	hook.
	
	If the other application quits before the termination of SUBAPP.EXE, a message
	hook is set that again waits for the activation of the desired application to
	append the menu items. If SUBAPP.EXE is closed before the target application,
	the added menu items are removed and the application is no longer subclassed.
	
	The message hook, the subclassing function for the application, and all of the
	menu appending and removing calls are placed in a fixed code DLL, called
	LIBSUBAP.DLL. This guarantees that SUBAPP.EXE will work properly in all of the
	three modes of Windows.
	
	SUBAPP.EXE can be used to subclass any Windows-based application as long as the
	class name of the target application's main window is known. In the
	application's header file (SUBAPP.H), the constant OTHER_CLASS_NAME can be
	initialized to the desired application's main-window class name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProc kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
