---
layout: page
title: "Q193511: PRB: Can Not Debug Using IDE Over Windows CE Services"
permalink: /kb/193/Q193511/
---

## Q193511: PRB: Can Not Debug Using IDE Over Windows CE Services

	Article: Q193511
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbOAK kbVC500 kbOSWinCE210
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- Attempts to debug an application on a Windows CE 2.1 sample project using the
	  Developer Studio debugger over Windows CE Services results in the following
	  error:
	
	  Failed to verify OS or platform.
	
	- Attempts to perform operations using Pfile.exe over Windows CE Services
	  result in failed connections or incorrect results.
	- When connecting Windows CE Services to sample projects via Repllog.exe, no
	  partnership is established and the mobile devices window on the host displays
	  the following:
	
	  Waiting for a mobile device to connect...
	
	CAUSE
	=====
	
	There is no support for Windows CE Services connectivity with Windows CE 2.1 in
	this release.
	
	RESOLUTION
	==========
	
	The Windows CE 2.1 Enhancement Pack does not include the necessary target- side
	connectivity components for Windows CE Services debugging.
	
	Unsupported, limited functionality for Windows CE Services debugging can be
	obtained by using the Windows CE 2.0 components included with the Windows CE
	Embedded Toolkit for Visual C++ 5.0. Windows CE 2.0 projects can still use
	Windows CE Services connectivity as usual.
	
	NOTES:
	
	- The Mobile Devices explorer does not function using this solution.
	
	- This solution can not be used with CE Shell debugging.
	
	- There is no solution for new processors because the Windows CE Embedded
	  Toolkit for Visual C++ 5.0 doesn't have component binaries for them.
	
	Supported debugging with the Windows CE 2.1 Enhancement Pack is done through the
	Windows CE Debug Shell tool (CESH). For information about configuring the Visual
	C++ IDE (Developer Studio) to use CESH for debugging, please see the section
	"Target Platform Connectivity Using the VC++ IDE" in the article "Release Notes
	for Windows CE 2.1 Enhancement Pack for the Windows CE Embedded Toolkit for
	Visual C++ 5.0" in the online documentation installed with the Enhancement Pack.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Including Target Side Windows CE Services Components
	----------------------------------------------------
	
	The Repllog.exe and Rapisrv.exe files that must be added to the Windows CE 2.1
	project to establish communications with Windows CE Services. Do the following
	to incorporate these files into your Windows CE 2.1 project image:
	
	1. Copy the retail components from the Windows CE 2.0 directories to your
	  Windows CE 2.1 target project OAK\FILES directory. This ensures that the
	  files are copied to your release directory during the build process. For
	  example, for the MAXALL project:
	
	  c:
	  cd C:\WINCE210\PUBLIC\MAXALL\OAK\FILES
	  copy C:\WINCE\PUBLIC\CECONN\OAK\TARGET\X86\I486\CE\RETAIL\REPLLOG.EXE
	  copy C:\WINCE\PUBLIC\CECONN\OAK\TARGET\X86\I486\CE\RETAIL\RAPISRV.EXE
	
	2. Add the files to your Project.bib file for the target project (the MAXALL
	  Project.bib file is in C:\WinCE210\Public\Maxall\Oak\Files). This ensures
	  that the files are included in the binary OS image during the build process.
	  For example:
	
	     repllog.exe    $(_FLATRELEASEDIR)\repllog.exe       NK
	     rapisrv.exe    $(_FLATRELEASEDIR)\rapisrv.exe       NK
	
	3. Rebuild the project.
	
	Establishing Communications with Windows CE Services
	----------------------------------------------------
	
	With Windows CE Services running and waiting for a connection, do the following:
	
	1. On the host device, run Pfconfig.exe and select Windows CE Services.
	
	2. On the target device, run Remnet.exe to create a remote networking connection
	  with suitable communications parameters (that is, correct communications
	  port, data rate, and so on).
	
	3. Run Control.exe and use the Communications applet to set the PC Connection
	  parameters to use the remote networking connection just created. Close the
	  applet.
	
	4. Run Repllog.exe.
	
	Once the device is logged on and the connection is established, the CEPC device
	will indicate that it has been connected.
	
	The host device may not indicate that it is connected. The message "Waiting for a
	mobile device to connect..." will remain even after the target device has
	successfully connected.
	
	You should now be able to use Pfile.exe and Developer Studio remote debugging as
	usual. If this solution does not work, the CE Shell method must be used for
	debugging. CE Shell debugging is available for all processors.
	
	You may receive a warning dialog box from Developer Studio:
	
	  The Platform and/or OS version do not match. Do you want to continue?
	
	It is safe to ignore this warning. Click Yes to dismiss the dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbOAK kbVC500 kbOSWinCE210 
	Technology        : kbAudDeveloper kbWinCESearch kbWinCEEnh210ETKVC500
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
