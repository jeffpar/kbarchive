---
layout: page
title: "Q110713: PRB: Ampersand in Menu Item Is Not Converted"
permalink: kb/110/Q110713/
---

## Q110713: PRB: Ampersand in Menu Item Is Not Converted

	Article: Q110713
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbMenu kbOSWinNT kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a menu item has tabbed or right-aligned text that contains a mnemonic access
	character, an ampersand ("&") will appear in front of the desired access
	character and the character will not be underlined.
	
	If the menu item has a cascading menu associated with it, the right-aligned text
	may partially overwrite the arrow that indicates the presence of a submenu.
	
	CAUSE
	=====
	
	An ampersand in a menu item string is normally translated into an underline
	character and used as the mnemonic access character for that menu item. If an
	ampersand occurs in tabbed or right-aligned text, however, it will not cause the
	character following it to be underlined. Instead, the ampersand and the access
	character will be literally displayed as they appear in the string. Windows does
	not examine tabbed or right-aligned text in menu strings to determine if the
	text contains an ampersand that needs to be converted into an underscore.
	
	STATUS
	======
	
	This problem has been noted, but the behavior has been retained to maintain
	backward compatibility for any application that may depend upon this behavior.
	
	MORE INFORMATION
	================
	
	Although the access character does not appear underlined in the menu, the menu
	item can still be selected by typing the access character. Windows correctly
	interprets the ampersand as signaling a mnemonic character, but does not
	correctly display the string.
	
	An example menu item string that demonstrates the problem is:
	
	     Start\aCtrl+&G
	
	In this example, the menu item is "Start", and the keyboard shortcut
	(accelerator) is CTRL+G. When the menu item is displayed, the ampersand and the
	"G" will be shown as they appear in the string rather than being converted into
	an underlined "G".
	
	"The Windows Interface: An Application Design Guide" from the Windows SDK makes a
	distinction between the menu item and the text that indicates the keyboard
	shortcut.
	
	Each menu item should have a mnemonic access character associated with it. The
	use of a mnemonic in a keyboard shortcut is thus non standard.
	
	Additional query words: right-justified justified
	
	======================================================================
	Keywords          : kbMenu kbOSWinNT kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
