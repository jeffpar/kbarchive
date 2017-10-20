---
layout: page
title: "Q193270: INFO: Troubleshooting VB Application Installation Issues"
permalink: /kb/193/Q193270/
---

## Q193270: INFO: Troubleshooting VB Application Installation Issues

{% raw %}

	Article: Q193270
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOS
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information included in this article provides some insight into preventing
	errors resulting from installing a Microsoft Visual Basic program using the
	Application Setup Wizard (ASW) and/or the Package and Deployment Wizard (PDW).
	The information in this article is divided into different areas that need to be
	considered before deploying an application: Environment, Operating System,
	Installed Applications of the Development Machine, and Third-Party Controls.
	
	NOTE: This article does not cover specific issues on using the ASW/PDW to create
	Internet Component Download distribution sets. Although the information may be
	helpful in the creation of such distribution sets, this article is intended for
	standard application deployment.
	
	MORE INFORMATION
	================
	
	NOTE: The Application Setup Wizard (ASW) and Package and Deployment Wizard (PDW)
	are referred to as ASW/PDW throughout this article.
	
	Environment
	-----------
	
	When developing an application, the development machine needs to stay free of any
	external applications or Internet downloaded components that are not
	specifically necessary for the development of the application. For example, beta
	software should not be used because it is possible that beta components may be
	included when you create the application distribution set.
	
	Another area that can affect the development environment is the browsing of the
	Internet on the development machine. Depending on the security level of your
	browser software, some sites can download new components and install them. This
	may not affect the development of the application, but, when creating the
	application distribution set, may cause unknown file versions and/or
	non-redistributable files to be included with your application. The preferred
	method of avoiding this problem is to not use your development machine for
	browsing the Internet. If this is not possible, consult your Internet browser's
	documentation for instructions on how to avoid downloading components or how to
	successfully uninstall components after they have been installed.
	
	Please refer to the "Application Distribution Set Methodology" section later in
	this article before using the ASW/PDW to build the application distribution
	set.
	
	Operating System
	----------------
	
	If possible, develop the application on the same operating system the target
	machine will use. This will ensure that operating specific versions of the
	supporting files are similar in the development and target environment. Also,
	service packs often fix many known problems with the operating systems and, with
	some operating systems, a certain Service Pack release is required to install a
	Visual Basic application. The latest Service Packs can be found at the following
	location:
	
	  http://support.microsoft.com/support/downloads/default.asp
	
	Applications Installed on Development Machine
	---------------------------------------------
	
	Applications installed on the development machine may affect the ASW/PDW in many
	ways. For instance, the presence of Microsoft Office 97 may have newer versions
	of some files and have additional controls that did not ship with Visual Basic.
	Once again, it is best to keep the development machine as clean as possible so
	as not to introduce any component that can alter the Visual Basic environment.
	
	For the most part, having multiple versions of Visual Basic on the same machine
	does not alter the development environment. With regards to application
	deployment, however, having multiple versions can cause the application to not
	install correctly due to newer versions of components and the inability of the
	installation application to correctly determine dependency information and/or
	register these components. To ensure a good distribution of the application, the
	development machine should have only the necessary version of Visual Basic
	installed.
	
	Again, please refer to the "Application Distribution Set Methodology" section of
	this article before using the ASW/PDW to build the application distribution
	set.
	
	Third-party Controls
	--------------------
	
	Third-party controls are controls that do not ship with Visual Basic and are
	supplied by a third-party vendor. These controls can be incompatible with other
	pieces of the application or even the operating system itself. If you suspect a
	third-party control may be causing a problem with your distribution set, you
	should create a test setup using the Setup Wizard for a very simple application
	(the Calc.vbp sample project that comes with Visual Basic is a good sample
	application). Create a distribution set using the Setup Wizard for a sample
	application such as Calc.vbp. If this setup is successful, begin eliminating the
	third-party controls from the original setup one by one and re-test. This helps
	you decide if a control is causing the problem. If you identify a control that
	is causing the problem, contact the vendor for additional information regarding
	the control.
	
	Application Distribution Set Methodology
	----------------------------------------
	
	The information below lists the ideal way to create a setup routine for your
	Visual Basic application. It is meant to be used as a guideline for setting up a
	clean environment for creating trouble-free application distribution sets and is
	not intended to be used as a step-by-step example:
	
	- Use a clean development machine that has as little as possible installed. A
	  clean installation of the Windows operating system plus Visual Basic and
	  AntiVirus software would be the ideal environment.
	
	- In an ideal environment, the development machine should have the same version
	  of Windows (95/98/Me, NT, or 2000) as the target machines. This may not be
	  possible due to differences on the target machines. Use the operating system
	  that is the most common among your target machines.
	
	- Install the latest Service Pack updates for both the operating system and for
	  Visual Basic to ensure you are using the most up-to-date files available.
	
	- Using AntiVirus software, check the machine for all known viruses. This
	  ensures that you will not be distributing a virus to your target users.
	
	- Test the application using the Visual Basic IDE, ensuring all components of
	  the application work as designed.
	
	- Run the ASW/PDW on your project to create the necessary distribution files.
	
	- Test the application on the development machine by installing the application
	  and ensuring all components of the application work as intended.
	
	- Again, use AntiVirus software to check the machine.
	
	- Test the installation on a target machine. Testing on more than one target
	  machine can also help identify issues before the application is deployed to
	  clients.
	
	  This should lead to a resolution of most issues dealing with the installation
	  of a custom application using the ASW/PDW. If the above information does not
	  lead to a resolution, please check the Microsoft Knowledge Base for any known
	  issues or contact Microsoft Technical Support for help resolving the issue.
	  The Microsoft Knowledge base can be accessed directly from the Internet using
	  the following URL:
	
	  http://msdn.microsoft.com/support
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161344 INFO: Visual Basic 4.0 and Visual Basic 5.0 Compatibility
	
	  Q174135 PRB: Setup Cannot Continue...System Files Are Out of Date
	
	  Q178354 INFO: How Setup Wizard and PDW Uses Dependency Files
	
	  Q180071 FILE: MSVBVM50.EXE Installs Visual Basic 5.0 Run-Time Files
	
	  Q187282 INFO: List of Visual Basic Run-Time Files Installed by Product
	
	  Q191692 PRB: SHDOCVW.DLL Not Included in PDW Setup Package
	
	  Q190978 PRB: Missing Dependency Information Dialog in PDW
	
	  Q192461 FILE: VBRUN60.EXE Installs Visual Basic 6.0 Run-Time Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
