---
layout: page
title: "Q130297: PRB: Cannot Reinstall a Specific Visual FoxPro Component"
permalink: kb/130/Q130297/
---

## Q130297: PRB: Cannot Reinstall a Specific Visual FoxPro Component

	Article: Q130297
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing or reinstalling additional Visual FoxPro components, the
	interface presented by the Setup program might seem unfamiliar.
	
	CAUSE
	=====
	
	Visual FoxPro uses the new Microsoft setup routine found in other Microsoft
	products. This setup program allows you to install, maintain and remove the
	different components of Visual FoxPro.To install a component of the product, you
	need to choose the appropriate check box for that option in the setup dialog
	box. If setup is run after the product has been installed, the setup routine
	enters a maintenance mode where the dialog box shows what components are already
	installed.
	
	To remove a component, clear the check box for the component. To add a component,
	select the check box for the option leaving the other options alone.
	
	This may confuse some users who want to reinstall only a single item. For
	example, while trying to reinstall the VFP.EXE, you might think that you need to
	clear the check boxes for all the other options. But what really happens is that
	everything but VFP.EXE and the .DLL filess is un-installed. The file VFP.EXE is
	not even reinstalled.
	
	WORKAROUND
	==========
	
	To install an previously uninstalled component, choose the component and
	continue with setup. FoxPro installs only that component.
	
	To reinstall an option that was previously installed, choose one of the
	following:
	
	- Run setup and remove the component that needs to be reinstalled. This will
	  remove it from the disk and the proper entry from the FOXSET32.STF or the
	  FOXSET16.STF file. After removing the option, run setup and choose the item
	  to reinstall.
	
	-or-
	
	- Delete the FOXSET32.STF or FOXSET16.STF file and run setup. When the
	  components dialog box appears, none of the items will be checked. Choose the
	  item that needs to be reinstalled. The only known drawback to this approach
	  is that FoxPro will not know which options have already been installed.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
