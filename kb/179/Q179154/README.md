---
layout: page
title: "Q179154: Adding OEM Display Adapters to Windows NT Display Tool"
permalink: /kb/179/Q179154/
---

## Q179154: Adding OEM Display Adapters to Windows NT Display Tool

{% raw %}

	Article: Q179154
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to add OEM drivers to Windows NT so that the drivers
	appear in the list of available drivers when using the Display tool. It also
	discusses how to enable the ability to use the 'detect' button to automatically
	find the appropriate driver.
	
	This article contains two sections. The first section is how to add the drivers
	so they appear in the list and can be installed manually. The second section is
	how to make them appear in the list and be detectable.
	
	To install OEM video drivers during NT unattended setup, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q166028
	  TITLE : Installing 3rd-Party Video Drivers with Txtsetup.oem Unattended
	
	This article discusses detailed editing of .inf files supplied on the Windows NT
	installation CD. While in depth knowledge of .inf files is not required, it is
	recommended that the user should have some basic understanding of how the files
	work and function. Because this involves the use and content of OEM supplied
	.inf files, Microsoft cannot guarantee that every video card will work.
	
	MORE INFORMATION
	================
	
	Section One
	-----------
	
	Adding OEM Drivers to the List:
	
	This procedure will make the drivers appear in the list of available drivers so
	that a user can install them by using the Display tool. In this example, the
	Matrox Millennium II (MGA64) is used. To get the key of your OEM video adapter,
	please see the manufacturers supplied OEM video .inf file and look in the
	[%manufacturers%.mfg] section. For example, to get MGA64, look at the following
	in the MGA64.inf file:
	
	  [Matrox.Mfg]
	  %Matrox% Millennium II = mga64
	  %Matrox% Millennium = mga64
	  %Matrox% Mystique = mga64
	
	1. Copy the files and subdirectories in the I386 directory to a server share
	  that the users will connect to set up Windows NT.
	
	2. Copy the manufacturer's OEM video drivers to the this share. Put the files in
	  the root of the I386 subdirectory. In this example, MGA64 consists of the
	  following files:
	
	  MGA64.dll
	  MGA64.sys
	
	3. Using the Expand.exe utility, expand the Dispoem.in_ file to Dispoem.inf.
	  Rename the Dispoem.in_ file to Dispoem.sav so the setup will copy the correct
	  file. This also maintains the integrity of the original file for backup
	  purposes.
	
	4. Use any text editor to edit the Dispoem.inf file and add the following:
	
	  a. In the [DestinationDirs], add the following lines to tell the display
	     routine where to copy the files.
	
	       [DestinationDirs]
	       n9i128v2.Miniport  = 12  ; drivers
	       n9i128v2.Display   = 11  ; system32
	       ;*****************added lines*****************
	       ;mga64.Display = 11 ; again we add these sections so it knows where to copy
	       ;the files
	       ;mga64.Miniport = 12 ; when installing the driver.
	       ;************ ends here************************
	       
	
	  b. In the next section, just copy the manufacturer's supplied .inf file
	     starting from Driver information (section that begins with [Manufacturer])
	     all the way down to, but not including, the Source file information
	     (section beginning with [SourceDisksNames.x86]). Follow the example
	     below.
	
	       ;********* section added - just copiedMGA64.inf**********
	       ;
	       ; Software Installation
	       ;
	
	       [n9i128v2.SoftwareSettings]
	       AddReg = n9i128v2_SoftwareDeviceSettings
	       
	       [n9i128v2_SoftwareDeviceSettings]
	       HKR,, InstalledDisplayDrivers,     %REG_MULTI_SZ%, n9i128v2
	       HKR,, VgaCompatible,               %REG_DWORD%,    0
	       
	       ;
	       ; Driver information
	       ;
	
	       [Manufacturer]
	       %Matrox%   = Matrox.Mfg
	
	       [Matrox.Mfg]
	       %Matrox% Millennium II = mga64
	
	       ;
	       ; General installation section
	       ;
	
	       [mga64]
	       CopyFiles=mga64.Miniport, mga64.Display
	
	       ;
	       ; File sections
	       ;
	
	       [mga64.Miniport]
	       mga64.sys
	
	       [mga64.Display]
	       mga64.dll
	
	       ;
	       ; Service Installation
	       ;
	
	       [mga64.Services]
	       AddService = mga64, 0x00000002, mga64_Service_Inst, mga64_EventLog_Inst
	
	       [mga64_Service_Inst]
	       ServiceType    = 1                  ; SERVICE_KERNEL_DRIVER
	       StartType      = 1                  ; SERVICE_SYSTEM_START
	       ErrorControl   = 0                  ; SERVICE_ERROR_IGNORE
	       LoadOrderGroup = Video
	       ServiceBinary  = %12%\mga64.sys
	
	       [mga64_EventLog_Inst]
	       AddReg = mga64_EventLog_AddReg
	
	       [mga64_EventLog_AddReg]
	       HKR,,EventMessageFile,0x00020000,"%SystemRoot%\System32\IoLogMsg.dll;%Syste
	       mRoot%\System32\drivers\mga64.sys"  ; This should appear on one line
	       HKR,,TypesSupported,0x00010001,7
	       
	       ;
	       ; Software Installation
	       ;
	       
	       [mga64.SoftwareSettings]
	       AddReg = mga64_SoftwareDeviceSettings
	       
	       [mga64_SoftwareDeviceSettings]
	       HKR,, InstalledDisplayDrivers,     %REG_MULTI_SZ%, mga64
	       HKR,, VgaCompatible,               %REG_DWORD%,    0
	       
	       [mga64.OpenGLSoftwareSettings]
	       
	       ;*********************ends here****************************
	       
	       
	
	  c. Next, add the following information in the [SourceDisksFiles] section:
	
	       ;***************added**************************************
	       mga64.sys  = 1,  ; again, just added the location at which the *.inf can
	       mga64.dll = 1,  ; find the files.
	       ;************ends here************************************
	       
	
	5. Save the file and start the installation. Again, this will not make the
	  adapter detectable during Windows NT setup but, when installing or
	  reinstalling the video drivers, the Display tool will have the selection in
	  the list without having to find OEM files on a floppy disk. From the Display
	  tool, select the display type; it will appear in the list. When selected, you
	  will be asked for the location of the files and users can enter the network
	  path of the installation location.
	
	Section Two
	-----------
	
	Making OEM Video Detectable Through the Display Tool:
	
	This procedure adds the OEM video driver to the Display tool and also makes it
	detectable when the 'detect' button is selected. For this example, the Matrox
	Millennium II (MGA64) is used.
	
	NOTE: This option requires some detailed editing of Display.inf.
	
	1. Copy the files and subdirectories in the I386 directory a server share that
	  the users will connect to set up Windows NT.
	
	2. Copy the manufacturer's OEM video drivers to the this share. Put the files in
	  the root of the I386 subdirectory. In this example, MGA64 consists of the
	  following files:
	
	  MGA64.dll
	  MGA64.sys
	
	3. Using the Expand.exe utility, expand the Dispoem.in_ file to Dispoem.inf.
	  Rename the Dispoem.in_ file to Dispoem.sav so the setup will copy the correct
	  file. This also maintains the integrity of the original file for backup
	  purposes.
	
	4. Use any text editor to make the following changes and additions to the
	  Display.inf file:
	
	  a. In the [DestinationDirs] add the following lines so that the display
	     routine knows where to copy the files:
	
	        mga_mil.Display      = 11
	        ;***************added*****************************
	        mga64.Miniport  = 12 ; This tells setup where the files go, 11 = system, 12
	        ; = system32\drivers
	        mga64.Display   = 11 ; The keys actually point to [section-headers] later
	        ; in the file
	        ;***************ends******************************
	        
	
	  b. Below the [detect.Display] section, add the following information:
	
	        ;***************additions begin here**********************
	        [mga64.Display] ; [section-header] referred to by the first section in the
	        ; file
	        mga64.dll
	        ;***************ends here**********************
	        
	        ;***************additions begin here**********************
	        [mga64.Miniport] ; [section-header] referred to at beginning of file.
	        mga64.sys
	        ;***************ends here**********************
	        
	
	  c. The next section is called the Models section. This will display your
	     adapter in the tool. Add the following information based on the
	     manufacturer of your OEM video:
	
	        [Matrox.Mfg]
	         %Matrox% IMPRESSION                           = mga, MGA_COMPAT
	         %Matrox% IMPRESSION PCI                       = mga
	         %Matrox% IMPRESSION VLB                       = mga
	         %Matrox% MILLENNIUM PCI                        = mga_mil, MGA_MIL_COMPAT
	         %Matrox% MILLENNIUM 220HZ PCI                  = mga_mil
	         %Matrox% ULTIMA PCI                           = mga
	         %Matrox% ULTIMA VLB                           = mga
	         %Matrox% ULTIMA + PCI                         = mga
	         %Matrox% ULTIMA + VLB                         = mga
	        ;***************additions begin here**********************
	         %Matrox% Millennium II                        = mga64, MGA64_COMPAT
	        ;The above line adds the name to the list of available drivers when adding
	        ;a driver manually through the display applet.  The 'mga64' is the key in
	        ;the registry, and the
	        ;"MGA64_COMPAT" is a name used in the [detect] section and can be anyname
	        ;as long as it does not contain any '-' (dashes) since they are not
	        ;allowed.
	        ;***************ends here**********************
	        
	
	     In the [detect.Services] section, the adapter must be added so that it
	     knows to resets the value in the registry to start the next time it start,
	     therefore making it detectable.
	
	        [detect.Services]
	        mga         = MGA_COMPAT
	        mga_mil     = MGA_MIL_COMPAT
	        mga         = MGA_COMPAT
	        mga_mil     = MGA_MIL_COMPAT
	        ;***************added*****************************
	        mga64       = MGA64_COMPAT
	        ; must match what is in the %matrox% section so
	        ; that detection will work when
	        ; selecting 'detect display' in
	        ; display applet.
	        ;***************ends******************************
	        
	
	     This solution requires two steps. Because this sections sets all the
	     registry keys noted above in HKLM\system\Currentcontrolset\services, the
	     key for the OEM video driver must exist. If the video card has never been
	     started, the key must be added to the registry using Regedit.exe. To get
	     the correct file, install the adapter to another computer manually, and
	     then change the display to VGA. This will set up the key like the other
	     video keys so it can be ported over to the new installations.
	
	     After the system starts into VGA mode, use Regedit to export the OEM video
	     key. In this example, exporting the Mga64 key created the following .reg
	     file:
	
	        REGEDIT4
	        
	        [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\mga64]
	        "Type"=dword:00000001
	        "Start"=dword:00000004
	        "ErrorControl"=dword:00000000
	        "Group"="Video"
	        
	        [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\mga64\Device0]
	        "InstalledDisplayDrivers"=hex(7):6d,67,61,36,34,00,00
	        "VgaCompatible"=dword:00000000
	        
	
	  d. Next, add the installation information for the OEM video in the next
	     section, which is the driver section. This information will come directly
	     from the OEM supplied .inf file. Depending on the .inf file, it may be in
	     a different order. Please follow one of the Microsoft supplied video
	     drivers in the Display.inf file as a guide, or the example below:
	
	        ;**************additions start here********************
	        ; mga64 Driver Section
	        ; This section installs the driver.  All the information was pulled from ;
	        ; the manufacturers
	        ; *.inf file.  Just follow an example of one of the existing cards in the
	        ; display.inf.
	        
	        [mga64]
	        CopyFiles=mga64.Miniport, mga64.Display
	        
	        ; mga_mil-II Software section
	        
	        [mga64.SoftwareSettings]
	        AddReg = mga64_SoftwareDeviceSettings
	        
	        ; Service Installation
	        
	        [mga64.Services]
	        AddService = mga64, 0x00000002, mga64_Service_Inst, mga64_EventLog_Inst
	        
	        [mga64_Service_Inst]
	        ServiceType    = 1                  ; SERVICE_KERNEL_DRIVER
	        StartType      = 1                  ; SERVICE_SYSTEM_START
	        ErrorControl   = 0                  ; SERVICE_ERROR_IGNORE
	        LoadOrderGroup = Video
	        ServiceBinary  = %12%\mga64.sys
	        
	        [mga64_EventLog_Inst]
	        AddReg = mga64_EventLog_AddReg
	        
	        [mga64_EventLog_AddReg]
	        HKR,,EventMessageFile,0x00020000,"%SystemRoot%\System32\IoLogMsg.dll;
	        %SystemRoot%\System32\drivers\mga64.sys"
	        HKR,,TypesSupported,0x00010001,7
	        
	        ;******************ends here****************
	        
	
	  e. In the display driver registry entries section, add the following based on
	     your OEM supplied video card.
	
	        ;***************additions begin here**********************
	        [mga64_SoftwareDeviceSettings]
	        HKR,, InstalledDisplayDrivers,     %REG_MULTI_SZ%, mga64
	        HKR,, VgaCompatible,               %REG_DWORD%,    0
	        ; This section reffered to by the MGA64 section that installs the video ;
	        driver
	        ;***************ends here**********************
	        
	
	  f. In the [detect.Display] section, add the OEM supplied .dll file so it
	     knows what file to copy:
	
	        cirrus.dll
	        framebuf.dll
	        mga.dll
	        ;***************additions begin here**********************
	        mga64.dll
	        ; entry needed so that the files are copied over when trying to
	        ;"detect" the display using the display applet.
	        ; The same entry must exist for the mini-
	        ; port file (*.sys)
	        ;***************ends here**********************
	        
	
	     Do the same for the OEM supplied .sys file:
	
	        [detect.Miniport]
	        ati.sys
	        cirrus.sys
	        dell_dgx.sys
	        et4000.sys
	        mga.sys
	        mga_mil.sys
	        ;***************added **********************
	        mga64.sys   ; again needed for manual detection of video cards.
	        ;***************ends **********************
	        
	
	5. Save the Display.inf file and place it back in the distribution share created
	  above. Again, this only makes the adapter detectable after setup has
	  completed.
	
	6. Start the Display tool, select the 'change driver' button and then click
	  'detect' to find the added display adapter. When the button is selected,
	  Windows NT will prompt for the location of the I386 directory; redirect it to
	  the share created in step 1. Windows NT will then copy all the video files
	  over that are needed for detection and the system will restart. The system
	  will restart in VGA mode but, when you log on, it will detect your display.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
