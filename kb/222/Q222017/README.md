---
layout: page
title: "Q222017: XCLN: The ODK IExpress Deployment Readme Text"
permalink: kb/222/Q222017/
---

## Q222017: XCLN: The ODK IExpress Deployment Readme Text

	Article: Q222017
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	What is the ODK IExpress Deployment Kit?
	----------------------------------------
	
	The Outlook Deploymnent Kit (ODK) IExpress Deployment Kit (IDK) method is a
	modular and extensible way of using the Internet Express (IExpress) program to
	generate user-specific profiles as well as rollout hotfixes or patches by
	bundling all files together into one custom package. This custom package can be
	executed at the end of the ODK setup, or run as a stand-alone executable.
	
	Why use the IDK?
	----------------
	
	Administrators using the Outlook Deployment Kit need to dynamically generate
	profiles and update Outlook with the various patches and hotfixes available. By
	using the IDK method and the IExpress program included with the ODK,
	administrators can accomplish both of these tasks during installation in one
	step.
	
	How does the IDK work?
	----------------------
	
	Administrators accomplish multiple tasks in one step by bundling program files
	and patches into one self-extracting executable and then specifying the launch
	order of the programs by using a custom .inf file. The programs to run are
	listed in the .inf file along with any command-line switches. This way
	applications can run in quiet mode or particular options can be specified. A
	sample .inf is supplied with the IDK. This gives administrators more control
	over deployment; they are not tied to using utilities running in the background
	where environment parameters can't be easily changed. They can now generate
	custom profiles and deploy several patches at one time.
	
	Is this another utility?
	------------------------
	
	No. The IDK is not a program but a method to aid in deployment. It uses existing
	utilities, such as Profgen and Newprof for profile generation. It also works
	with patches, such as the Outlook Security Patch, and others. With this method
	there is no code to update. In fact, the only thing that needs to be updated is
	the various ways in which you can use this method.
	
	Can I only generate profiles?
	-----------------------------
	
	No. With this method you can apply QFE hotfixes, patches available with a Service
	Pack, patches downloaded from the Web, replace .dll files, or install full
	applications.
	
	Can I install a program that contains its own Setup?
	----------------------------------------------------
	
	Yes. Use of a batch file which would require extensive modification to allow for
	a complex setup routine is not necessary. The IDK can use a command-line switch
	placed at the end of the Setup.exe line to wait until the running Setup
	completes before continuing. This correct syntax would be: "setup.exe -SMS"
	(without the quotation marks).
	
	Does it only work with Outlook and the ODK?
	-------------------------------------------
	
	No. The IDK methodology can be used to generate a self-extracting stand-alone
	executable, which can accomplish the above tasks for almost any application.
	Your update could then be emailed to users, deployed through Systems Management
	Server, used in logon scripts, and so on.
	
	What is included with the IDK?
	------------------------------
	
	The IExpress Deployment Kit contains all the files and Knowledge Base articles
	necessary to guide you through:
	
	Steps for the creation of an IExpress package:
	
	  Q191900 XCLN: How to Use IExpress to Deploy Multiple Packages with ODK
	
	  Navigating The IExpress Configuration Wizard.doc
	
	Steps and a sample .inf file to cleanly generate profiles with user specific settings:
	
	Steps and filenames for applying the patches available for Outlook:
	
	  Q191899 XCLN: How to Deploy Exchange 5.5 SP1 KMS Client Fixes with ODK
	
	  Odk.inf file
	
	Steps on how to correctly extract and run other Setup programs:
	
	  Examples in the Odk.inf file
	
	Instructions for adding your package to the ODK for easy deployment:
	
	  Q190053 XCLN: Adding Custom Applications to Active Setup with the ODK
	
	A fix for the "Out of Memory or System Resources" error when creating new journal items that can sometimes happen after installing Outlook with the ODK:
	
	  Q190495 OL98: ErrMsg: Out of Memory or System Resources
	
	Profile Designer (Designer.exe):
	
	  Profile Designer is a graphical utility to help in the generation of the
	  custom package needed for a user specific profile. The utility can generate a
	  custom .prf file with specific services and Outlook settings. It can generate
	  an .inf file to be used as a building block for building a custom package. It
	  can create the whole self-extracting archive with the click of a button. This
	  will eliminate the need to completely understand .inf and .prf files if all
	  you wish to do is make a custom profile package.
	
	MORE INFORMATION
	================
	
	For additional help please see the following articles and documents included in
	this archive:
	
	  Q191899 How to Deploy Exchange 5.5 SP1 KMS Client Fixes with ODK.txt
	
	  Q191900 How to Use IExpress to Deploy Multiple Packages with ODK.txt
	
	  Q193114 How To Generate A User-Specific Profile with IExpress and ODK.txt
	
	  Q190053 Adding Custom Applications to Active Setup with the ODK
	
	  Navigating The IExpress Configuration Wizard.doc
	
	This utility is available at the following location:
	
	http://support.microsoft.com/support/downloads/dp3384.asp
	
	Additional query words: idk odkidk profgen newprof multiple inf odk deploy prfadmin odkidk98 odkidk98.exe admin login iexpress
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbinfo
	
	=============================================================================
	
