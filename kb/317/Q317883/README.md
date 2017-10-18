---
layout: page
title: "Q317883: HOW TO: Manage Your Visual SourceSafe Configuration for VS .NET"
permalink: kb/317/Q317883/
---

## Q317883: HOW TO: Manage Your Visual SourceSafe Configuration for VS .NET

	Article: Q317883
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	   - Microsoft Visual Studio.NET (2002), Academic Edition 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Requirements
	- Visual SourceSafe Configuration Options
	
	   - Configuring Visual SourceSafe
	- Configuring Visual SourceSafe Administrator
	
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article demonstrates how to set common configuration options in Visual
	SourceSafe for use with Visual Studio .NET.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure, and service packs that are required:
	
	- Visual SourceSafe 6.0c
	- Visual Studio .NET
	
	This article assumes that you are familiar with the following topics:
	
	- Visual Studio .NET
	- Source control programs
	
	Visual SourceSafe Configuration Options
	---------------------------------------
	
	The sections to follow demonstrate how to set several common configuration
	settings in Visual SourceSafe. You can use these settings to customize Visual
	SourceSafe to your own specific needs.
	
	Configuring Visual SourceSafe:
	
	1. Start Microsoft Visual Studio .NET.
	
	2. On the File menu, point to Source Control, and then click Microsoft Visual
	  SourceSafe. Visual SourceSafe 6.0 starts in a new window.
	
	  NOTE: Depending on the account that you are currently logged in as, the Visual
	  SourceSafe Login dialog box may appear. If this dialog box appears, type your
	  user name, your password, and your database, and then click OK. If you are
	  not sure of this information, contact your Visual SourceSafe Administrator.
	
	3. On the Tools menu, click Options.
	
	4. The Visual SourceSafe Options dialog box includes the following tabs:
	
	   - General tab. Among other options, this tab includes the "Reuse last
	     comment" check box. You can click to select this check box so that Visual
	     SourceSafe automatically reuses the last comment that you typed for the
	     next operation. When you repeat tasks, such as setting the start position
	     for all forms in a Microsoft .NET Windows Forms application, this setting
	     can save you extra typing.
	
	   - Local Files tab. On this tab, you can change the various settings for the
	     files that are stored on your local computer. Among other options, this
	     tab includes the following options:
	
	      - "Use read-only flag for files that are not checked out" check box. Make
	        sure that this check box is selected. This setting is very important
	        because it prevents you from making changes to a file that has not been
	        checked out.
	
	      - "Set date/time on local files" list. In this list, click Modification.
	        This setting determines how Visual SourceSafe sets the date/time stamp
	        for files in your working folder when you get the latest file or check
	        out a file. When you set this option to modification, your local copy
	        of each file includes the date and the time that the file was last
	        modified.
	
	   - View tab. On this tab, you can select whether to display the toolbar, the
	     status bar, and the results pane in Visual SourceSafe. You can also change
	     the auto-refresh rate for the file list.
	
	   - Difference tab. On this tab, you can set the font, the color, and other
	     viewing options for when you compare files.
	
	   - Command Dialogs tab. For every command that is performed on a file or on a
	     project, there is an associated dialog box that includes additional
	     options.
	
	     For example, when you use the Get Latest Version command on a file, a
	     dialog box appears that includes additional options such as the ability to
	     override the working folder. Typically, you do not want to override the
	     working folder. Therefore, you may not want to be prompted with this
	     dialog box every time you use the Get Latest Version command. You can
	     click to clear the Get Latest Version check box so that this dialog box
	     does not appear.
	
	     Click to clear both of the Get Latest Version check boxes.
	
	     NOTE: If you change your mind later, you can click to select the Get Latest
	     Version check boxes. Alternatively, you can press the SHIFT key when you
	     perform an individual command.
	
	   - Warnings tab. On this tab, you can turn on or turn off various warning
	     dialog boxes. These warnings are displayed when perform a command that may
	     result in the loss of data. Typically, you do not want to change these
	     options.
	
	5. Click OK to accept the changes, or click Cancel to reject the changes.
	
	6. On the File menu, click Exit to close Visual SourceSafe.
	
	7. On the File menu, click Exit to close Visual Studio .NET.
	
	Configuring Visual SourceSafe Administrator:
	
	1. Click Start, point to Programs, point to Microsoft Visual SourceSafe 6.0, and
	  then click Visual SourceSafe 6.0 Admin.
	
	2. On the Tools menu, click Options.
	
	3. The SourceSafe Options dialog box includes the following tabs:
	
	   - General tab. On this tab, you can set general settings. Among other
	     options, this tab includes the following options:
	
	      - "Allow multiple checkouts" check box. With this setting, multiple
	        programmers can check out the same file at the same time. Typically,
	        you do not want to click to select this option.
	
	      - "Log all actions in journal file" box. In this box, you can type a path
	        such as "C:\LogFile.txt" (without the quotation marks). With this
	        setting, you can track all actions (such as Get Latest Version and
	        Check Out) that the users perform.
	
	   - Project Security tab. You can use the settings on this tab as the default
	     access rights when you add a new user to Visual SourceSafe. For example,
	     you may not want new users to have access rights to destroy a file. In
	     that case, click to select the "Enable project security" check box, and
	     then click to clear the Destroy check box under "Default user rights".
	
	   - Shadows Folder tab. The shadows folder is a directory that contains all of
	     the current versions of all of the files in a project. Because all files
	     are stored in the Visual SourceSafe database, there is no absolute
	     requirement to use a shadows folder. However, some users may find it
	     useful to have a central location for all of the latest files.
	
	     The Shadow Folders tab includes the following text boxes:
	
	      - "Set shadow folder for project" box. In this box, you can type the name
	        of an existing project, or you can click Browse to select a project
	        from a graphical list. The exact name of the project depends on what
	        projects are under Visual SourceSafe control.
	
	      - "Set shadow folder to" box. In this box, you can type the name of an
	        existing directory on your file system, or you can click Browse to
	        select a project from a graphical list.
	
	   - Web Projects tab. On this tab, you can set various options for Web
	     projects such as the URL, the virtual root, and the deployment path. These
	     settings are useful for Microsoft ASP.NET and Web Service applications.
	     These settings apply on a per project basis.
	
	   - Web tab. This tab includes the following options:
	
	      - "Proxy for deploying over ftp" box. You can use this setting to specify
	        a proxy when you deploy a project through a firewall.
	
	      - "Do not use the proxy for these local servers" box. This setting
	        overrides the "Proxy for deploying over ftp" setting for local servers.
	
	      - "Default filename for Web pages" box. You can use this setting during a
	        Check Hyperlinks run.
	
	     Unlike the Web Projects tab, the settings on the Web tab apply across your
	     Web projects.
	
	4. Click OK to accept the changes, or click Cancel to reject the changes.
	
	5. On the Users menu, click Exit to close Visual SourceSafe Administrator.
	
	Troubleshooting
	---------------
	
	The user must have a Visual SourceSafe account to access these configuration
	options. If the user does not have a Visual SourceSafe account, the user must
	contact the Visual SourceSafe administrator.
	
	REFERENCES
	==========
	
	For more information, see the following MSDN Web sites:
	
	  Using Visual SourceSafe 6.0
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/guides/html/vstskUsing_VSS.asp
	
	  Product Overview: The Version Control System for Development Teams Using
	  Visual Studio .NET
	  http://msdn.microsoft.com/ssafe/prodinfo/overview.asp
	
	  Visual SourceSafe Product Information Overview
	  http://msdn.microsoft.com/ssafe/Prodinfo/?RLD=25
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
