---
layout: page
title: "Q128624: How to Create and Assign User Profiles for Users in a Domain"
permalink: kb/128/Q128624/
---

## Q128624: How to Create and Assign User Profiles for Users in a Domain

	Article: Q128624
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides specific instructions for creating and assigning user
	profiles for Windows NT users in a domain.
	
	MORE INFORMATION
	================
	
	1. Create a working User Profile on the server. You will use this as a template
	  for all user accounts.
	
	  a. Create an Administrator account (for example, ProfileAdmin). You will use
	     this account to create this initial profile template.
	
	  b. Create a directory and share where you want to save the user profiles. For
	     example, create D:\PROFILES, and share it as Profiles. The examples
	     included in this article use a server called MyServer in a domain called
	     MyDomain.
	
	  c. Logon as ProfileAdmin on MyServer.
	
	  d. Configure the Windows NT environment of your computer to be exactly as you
	     want it for the user profile you are creating. The following environment
	     settings are saved:
	
	     Source              Parameters saved
	     ---------------     -------------------------------------------------
	
	     Program Manager     All user-definable settings for Program Manager,
	                         including personal program groups and their
	                         properties, program items and their properties,
	                         and all settings saved by the Save Settings On
	                         Exit and Save Settings Now commands.
	
	     File Manager        All user-definable settings for File Manager,
	                         including network connections, and everything
	                         saved by the Save Settings On Exit command.
	
	     Command prompt      All user-definable settings for the command
	                         prompt, including fonts, colors, settings for the
	                         screen size buffer, and window position.
	
	     Print Manager       Network printer connections and all settings
	                         saved by the Save Settings On Exit command.
	
	     Control Panel       All settings for the Color, options Mouse,
	                         Desktop, Cursor, Keyboard, International, and
	                         Sound options. For the System option, only the
	                         entries in the User Environment Variables box.
	                         The other Control Panel options do not contain
	                         user- specific settings.
	
	     Accessories         All user-specific application settings affecting
	                         the user's Windows NT configuration. These
	                         accessory applications include Calculator,
	                         Calendar, Cardfile, Clock, Notepad, Paintbrush,
	                         and Terminal.
	
	     Third-party         Any application written specifically for Windows
	     Windows NT          NT can be designed so that it tracks application
	     applications        settings on a per-user basis. If this user-
	                         specific information exists, it is saved in the
	                         user profile.
	
	     Online Help         Any bookmarks placed in the Windows NT Help
	     bookmarks           system.
	
	     NOTE: For Common items (such as .BMP wallpaper files) point to a
	     central server share so everyone can access them.
	
	  e. Run Program Manager, choose Options, and then choose Save Settings Now.
	
	  f. Run User Profile Editor and select desired options.
	
	  g. From the User Profile Editor File menu choose Save As File. Save the
	     profile with a generic name (for example, USERPROF.USR) and save it in the
	     shared profiles directory (for example, D:\PROFILES\USERPROF.USR). If you
	     want to use the profile as a mandatory profile, give it a name such as
	     USERPROF.MAN (D:\PROFILES\USERPROF.MAN).
	
	2. Create a template user that will use profile based on the template.
	
	  a. Log on to MyServer with your regular Administrator account.
	
	  b. Run User Manager for Domains, create a new user account (for example,
	     GenUser), and assign the user the following profile:
	
	  \\myserver\profiles\%username%.usr
	
	     Use %username%.man if you are using mandatory profiles.
	
	  c. In User Profile Editor, open the following template user profile:
	     d:\profiles\userprof.usr (or .man)
	
	  d. Choose the Browse button next to Permitted To Use Profile." Permit the
	     user to use the profile. For example, permit MyDomain\GenUser to use the
	     profile. If you want everyone to use the same profile, you can permit
	     Domain Users to use the profile. If you do this, ensure (with share or
	     NTFS permissions), that the users won't be able to save any modifications
	     to the profile. If uses save changes to their profile, the next person to
	     log on gets the previous user's modified profile. For example, if UserBob
	     makes a change to the profile, and then UserJane makes a change to the
	     profile, the next time UserBob logs on, his environment will look
	     different than when he had saved it.
	
	  e. From the User Profile Editor File menu, choose Save As File.
	
	  f. Save the file with a new name that matches the user name you just gave
	     permissions to. For example, if you just gave permissions to GenUser, save
	     the file as: d:\profiles\GenUser.usr (or .man) If you permitted a group of
	     users to use the profile, such as Domain Users, give it a name such as
	     DOMUSR.USR (or .MAN)
	
	3. To create profiles for individual users:
	
	  a. In User Manager for Domains, copy the template user to the new user name.
	     For example, copy GenUser to JaneX.
	
	  b. Repeat steps 2.c. through 2.f. to assigning the proper user profile for
	     each user you create. If you permitted Domain Users to use the profile,
	     then all you have to do is make sure that the users have that profile
	     specified.
	
	For additional information on using User Profile Editor, see the Windows NT
	Server version 3.5 System Guide, chapter 14.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140417: Controlling Common Program Groups Seen In User Profiles
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
