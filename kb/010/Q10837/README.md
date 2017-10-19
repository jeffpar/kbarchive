---
layout: page
title: "Q10837: INFO: A Discussion of Windows Fonts"
permalink: /kb/010/Q10837/
---

## Q10837: INFO: A Discussion of Windows Fonts

	Article: Q10837
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following discussion on Windows fonts describes how they are defined and why
	they are necessary.
	
	MORE INFORMATION
	================
	
	How Default Fonts Are Assigned
	------------------------------
	
	At the API level, Windows version 3.0 defines six stock fonts. Each of these
	fonts has a logical description. At Windows 3.0 boot time, GDI constructs the
	logical description of these fonts in the following manner:
	
	1. During its initialization, GDI calls an internal function, InitFonts(), which
	  is responsible for physically loading three basic fonts. Under a typical
	  Windows 3.0 installation, the names of the font files for these fonts are
	  listed in the [boot] section of the SYSTEM.ini file. For example, this
	  section (in part) resembles the following:
	
	     fixedfon.fon=vgafix.fon
	     oemfonts.fon=vgaoem.fon
	     fonts.fon=vgasys.fon
	
	  The system font is loaded first. GDI first checks the WIN.ini file in the
	  [windows] section for the key name SystemFont=<file>, where
	  <file> is a name of a bitmap font (such as HELV.FON). If GDI finds this
	  keyname, it will attempt to load the specified file as thesystem font.
	  Changing this value is one method the user can use to customize the system
	  font. NOTE: If you change SystemFont=<font> you *must* also have the
	  line fonts.fon=<font> in the [windows] section of the SYSTEM.INI file.
	  Otherwise, Windows will not load properly.
	
	  If GDI does not find this key name, it attempts to load the system font from a
	  file called FONTS.fon using the GDI function AddFontResource. Notice that on
	  typical installations of Windows 3.0, there is no file called FONTS.fon.
	  AddFontResource calls LoadLibrary to load the specified file. If the file is
	  not found, LoadLibrary will search the SYSTEM.ini file (in the [boot]
	  section) for a redirection of the file. As shown above, the [boot] section of
	  SYSTEM.ini for a VGA system contains the following:
	
	     fonts.fon=vgasys.fon
	
	  This line indicates that the system font should be loaded from the file
	  VGASYS.fon, which resides in the system directory.
	
	2. Once the system font is physically loaded, GDI attempts to load a fixed-pitch
	  font. GDI examines the [boot] section of the SYSTEM.ini file and extracts the
	  filename from the fixedfon.fon= field. If no file is specified, the system
	  font (loaded in step 1) is substituted for the system fixed-pitch font.
	
	3. Next, the terminal font is loaded. GDI attempts to load the file OEMFONTS.fon
	  (via AddFontResource). This file may be redirected in the same manner as the
	  system font in step 1.
	
	4. Later during its initialization, GDI gets the module handle of DISPLAY. Using
	  the module handle, it does a FindResource() on the resource string "fonts",
	  which is an array of three LOGFONT structures that have been defined by the
	  display driver manufacturer. This is the resource that is included in the
	  display driver's .RC file with the line:
	
	     fonts   oembin  PRELOAD         fonts.bin
	
	  Once this resource is found, GDI steps through the array of LOGFONTS and calls
	  CreateFontIndirect to create the stock font objects:
	
	     OEM_FIXED_FONT
	     ANSI_FIXED_FONT
	     ANSI_VAR_FONT
	
	  These logical font definitions can be thought of as recommendations for a
	  particular display by the display driver. In general, these logical font
	  descriptions will map to one of the physical fonts loaded initially by GDI.
	
	  However, when an application selects one of these stock fonts, the font mapper
	  selects the closest matching font from a list of available physical fonts in
	  the system. This list contains the initial system fonts that were loaded by
	  GDI, in addition to other fonts that may have been loaded at a later time.
	  Therefore, there is no guarantee that a given stock font will necessarily map
	  to one of the three initial fonts loaded by GDI.
	
	5. Once these three stock fonts have been defined, GDI defines the stock font
	  SYSTEM_FONT. GDI does this by opening the system font file loaded in step 1
	  and builds a logical font structure that exactly matches the physical
	  characteristics of the physical font. This is to ensure that the font mapper
	  will select this physical font when the SYSTEM_FONT stock font is requested.
	
	6. Finally, the logical description of the device default font
	  (DEVICE_DEFAULT_FONT) is defined. This font is defined to be the same as the
	  SYSTEM_FONT.
	
	Why These Fonts Are Necessary
	-----------------------------
	
	There are two reasons for having these six stock fonts. One reason is to provide
	an OEM font that displays well at 10 pitch on the machine. This font is also
	used to determine the height of dialog boxes. The second reason is to provide
	ANSI fonts that are based on proposed standards (device-independent) and match
	Microsoft's virtual-key definitions.
	
	Please note that all of these fonts are required. The display driver must include
	the three logical fonts (described above) or GDI will not initialize properly.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
