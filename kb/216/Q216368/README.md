---
layout: page
title: "Q216368: PRB: Access Violation During Application Setup When File in Use"
permalink: /kb/216/Q216368/
---

## Q216368: PRB: Access Violation During Application Setup When File in Use

{% raw %}

	Article: Q216368
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a setup that was created by the Visual Basic Setup Wizard or
	Package and Deployment Wizard (PDW), the following error message is generated:
	
	  <file path and name>
	
	  An access violation occurred while copying the file.
	
	where <file path and name> is the name of the file, including the complete
	path, that Setup is attempting to copy.
	
	CAUSE
	=====
	
	Another open program is using the specified file. In some cases, the file may be
	in use by the operating system.
	
	RESOLUTION
	==========
	
	
	Follow these steps to resolve the problem:
	
	1. Verify that the file specified in the error message is redistributable. If
	  the file is not listed as being redistributable, rebuild the distribution
	  removing that file from the setup files.
	
	  In Visual Basic 5.0, check the files License.txt and Redist.txt, both of which
	  are located in the "Program files\DevStudio\VB" folder.
	
	  In Visual Basic 6.0, check the files Eula.txt in the "Program Files\Microsoft
	  Visual Studio\Common\Setup\1033" folder and Redist.txt in the "Program
	  Files\Microsoft Visual Studio" folder.
	
	2. If the file is redistributable, make certain that the user closes all open
	  programs before installing the application. Booting Win9x in Safe Mode
	  prevents most applications from loading automatically at startup, as does
	  holding down the SHIFT key for the duration of the boot. Neither method
	  disables anti-virus software, screen savers, and so forth, so they must be
	  shut down manually if they load the problem DLL.
	
	  To determine which program is using the file, use a utility such as DLLView
	  for Windows 9x or Process Explorer (formerly HandleEx) for Windows NT/Windows
	  2000. Both utilities are available as free downloads from a third-party Web
	  site at the following address:
	
	  http://www.sysinternals.com/ntw2k/freeware/procexp.shtml
	
	  If all open programs are closed, and the user still receives the error
	  message, the file may be in use by the operating system. In this case, the
	  following alternatives are available to work around the error message:
	
	- Users can click Ignore in response to the error message. When they click
	  Ignore, they will receive the same message again with the following
	  additional information:
	
	  If you ignore a copy error, the file will not be copied. The application may
	  not function properly as a result. Do you want to ignore the error?
	
	  If they click Yes, Setup continues installing the remaining files, and the
	  application will often run properly without replacing the file.
	
	- If a version of the file that is compatible with the application is already
	  on the user's target system, you can remove the file from the file you
	  distribute to avoid the message altogether. See the MORE INFORMATION section
	  later in this article for details concerning the files that most commonly
	  cause this error message.
	
	- You can customize the Setup Toolkit project (Setup1.vbp). Microsoft Technical
	  Support does not provide support for modifying the Setup Toolkit project, but
	  the source code is available for customization. For more information, search
	  on the phrase "setup toolkit project" in "Books Online" for Visual Basic 5.0
	  or the "MSDN Library Visual Studio 6.0."
	
	
	  For additional information about programmatically replacing files that are in
	  use, please refer to the following article in the Microsoft Knowledge Base:
	
	  Q140570 HOWTO: Moving Files That Are Currently in Use
	
	
	- You may want to consider using a third-party Setup program.
	
	
	MORE INFORMATION
	================
	
	This error occurs most frequently when developers distribute the following
	files:
	
	Comctl32.dll   (Not redistributable)
	Comdlg32.dll   (Not redistributable)
	Mfc42.dll
	Msvcrt.dll
	Msvcrt20.dll
	Msvcrt40.dll
	
	This error has also been reported less frequently with the following files:
	
	Mfc40.dll  
	Msvcirt.dll
	
	NOTE: Do not redistribute Comctl32.dll or Comdlg32.dll. If you must update
	Comctl32.dll, download 401comupd.exe from the following Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/ieplatform/ie/comctrl.asp
	
	The following tables contain information about the files listed above, including
	which operating systems install them and which operating systems require them.
	
	File           Operating     File         File       File
	Name           System        Installed?   In Use?    Version
	--------------------------------------------------------------
	
	Mfc40.dll      Windows 95    No           No   
	              Windows 95b   Yes          No         4.1.6139
	              Windows 98    Yes          No         4.1.6139
	              NT 4.0        Yes          No         4.1.6139
	
	Mfc42.dll      Windows 95    No           No    
	              Windows 95b   No           No          
	              Windows 98    Yes          No         4.21.7325          
	              NT 4.0        Yes          No         4.2.6068
	
	Msvcirt.dll    Windows 95    No           No  
	              Windows 95b   No           No          
	              Windows 98    Yes          No         4.20.6164           
	              NT 4.0        Yes          No         4.20.6201
	
	Msvcrt.dll     Windows 95    No           No    
	              Windows 95b   No           No       
	              Windows 98    Yes          Yes        5.00.7128        
	              NT 4.0        Yes          Yes        4.20.6201
	
	Msvcrt20.dll   Windows 95    Yes          No         2.11.000   
	              Windows 95b   Yes          No         2.11.000        
	              Windows 98    Yes          No         2.11.000       
	              NT 4.0        Yes          No         2.11.000
	
	Msvcrt40.dll   Windows 95    No           No    
	              Windows 95b   Yes          No         4.10.6038        
	              Windows 98    Yes          No         4.10.6038       
	              NT 4.0        Yes          No         4.20       
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
