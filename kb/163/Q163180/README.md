---
layout: page
title: "Q163180: Flight Simulator 95: Installing Scenery"
permalink: kb/163/Q163180/
---

## Q163180: Flight Simulator 95: Installing Scenery

	Article: Q163180
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusagekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Scenery created prior to the release of Flight Simulator for Windows 95, version
	6.0 may require a manual installation to run correctly. Previous versions of
	Flight Simulator were MS-DOS programs. The installation programs for these
	MS-DOS programs may not work correctly with the new version of Flight Simulator.
	
	MORE INFORMATION
	================
	
	Installing scenery products shipped prior to the release of Flight Simulator for
	Windows 95.
	
	Microsoft
	---------
	
	- Expansion Pack for Microsoft Flight Simulator for Windows 95.
	
	  1. Insert the Flight Simulator compact disc into your CD-ROM drive. If
	     Autorun is enabled, the Setup program will begin autoatically.
	
	  2. If Autorun is not enabled, click the Start button, point to Settings, and
	     click Control Panel.
	
	  3. In Control Panel, double-click Add/Remove Programs.
	
	  4. On the Install/Uninstall tab, click the Install button. Setup will begin.
	     Select your desired installation.
	
	- Scenery Pack for Microsoft Flight Simulator.
	
	  NOTE: If you have Microsoft Caribbean, Japan, Hawaii, or Scenery Pack 1, you
	  must use the new Setup program provided on the Flight Simulator for Windows
	  95 compact disc to set up those products.
	
	  Do not install the Paris or New York scenery packages. These packages have
	  been incorporated into Flight Simulator for Windows 95 and are installed
	  automatically during the setup of Flight Simulator.
	
	  To start the New Scenery Setup:
	
	  1. Insert the Microsoft Flight Simulator for Windows 95 compact disc into
	     your CD-ROM drive.
	
	  2. Click the Start button, and then click Run.
	
	  3. In the Run dialog box, type "<Drive>:\scnsetup\setup.exe" (without
	     the quotation marks) on the Open line, where <Drive> is the drive
	     letter for you CD-ROM drive, and click OK.
	
	  4. Follow the on screen instructions. Scenery Setup will ask which Scenery
	     add-ons you are installing, and it will ask for your original Flight
	     Simulator disks. Make sure you select ALL of the Scenery add-ons that you
	     want to install.
	
	  NOTE: Certain areas of New Scenery included with Flight Simulator for Windows
	  95 are disabled to make these add-ons available. You can reactivate these
	  areas by using the scenery library in Flight Simulator. For example, if you
	  installed Hawaii, you should reactivate the North America scenery area.
	
	  For more information about the scenery library, see the "Configuring and Using
	  Scenery with the Scenery Library" section in this article. You will also find
	  detailed information about the scenery library in the "Working With Scenery"
	  topic under the "Using Flight Simulator Section" of Pilot's Help.
	
	  If you decide to install additional Microsoft add-on scenery products (i.e.,
	  Caribbean, Hawaii, Japan, or Scenery Pack 1), you will need to run the
	  Scenery Setup again to uninstall any existing add-ons. Then run the Scenery
	  Setup again and select ALL of the products you wish to install.
	
	BAO Scenery Products
	--------------------
	
	Europe 1
	
	NOTE: To use the BAO Europe 1 add-on scenery, you must copy files from your BAO
	disks to a subfolder located in the folder where Flight Simulator for Windows 95
	was installed. You must then run two .exe files and use the scenery library in
	Flight Simulator to finish installing the BAO Europe scenery.
	
	- To copy the files:
	
	  1. Locate the folder where you installed Microsoft Flight Simulator for
	     Windows 95. The default location is C:\Program
	     Files\Microsoft\Games\Flight Simulator.
	
	     NOTE: The steps below, refer to this folder as Fltsim.
	
	  2. In My Computer or Windows Explorer, click Disk1a.exe to select it.
	
	     NOTE: Disk1a.exe is located on Disk 1 of Europe 1, or the Europe 1 compact
	     disc.
	
	     From the Edit menu, click Copy. Next, open the Fltsim folder and from the
	     Edit menu, click Paste.
	
	  3. In My Computer or Windows Explorer, open the Fltsim\Scenery folder. From
	     the File menu, point to New, and then click Folder. When the new folder
	     appears with a temporary name, type "Europe1" (without the quotation
	     marks) for the new name. You will now see a new folder in your
	     Fltsim\Scenery folder named Europe1.
	
	  4. Copy Disk1.exe from the Europe 1 Disk 1 and Disk2.exe from the Europe 1
	     Disk 2 to the Europe1 folder.
	
	  5. Create two new folders in the Europe1 folder named SCENERY and TEXTURE.
	     These folders should be located in the Fltsim\Scenery\Europe1 folder.
	
	  6. From your Flight Simulator compact disc, copy the files in the \Scenery
	     Setup\Europe1 folder to the Fltsim\Scenery\Europe1\Scenery folder on your
	     hard disk.
	
	  NOTE: For more information about performing these tasks in Windows, see your
	  Windows printed documentation or online Help.
	
	- To run Disk1.exe, Disk1a.exe, and Disk2.exe:
	
	  NOTE: You should run these .exe files from an MS-DOS command prompt.
	
	  1. Click on the Start button, point to Programs, and click MS-DOS Prompt.
	     Change to the Fltsim folder on your hard disk by typing the following:
	
	  cd fltsim
	
	     Run the .exe by typing the following at the command prompt and pressing
	     ENTER:
	
	  disk1a
	
	  2. When the files are finished expanding, type the following at the command
	     prompt and press ENTER to delete the files:
	
	  del disk1a.exe
	
	  3. Change to the Fltsim\Scenery\Europe1 folder by typing the following at the
	     command prompt and pressing ENTER:
	
	  cd fltsim\scenery\europe1
	
	     Run the .exe files by typing the following at the command prompt and
	     pressing ENTER:
	
	  disk1
	
	     and then,
	
	  disk2
	
	  4. Delete the files Disk1.exe and Disk2.exe from the Europe1 folder by typing
	     the following and pressing ENTER:
	
	  del disk1.exe
	
	     and then,
	
	  del disk2.exe
	
	- Complete the installation with the Scenery Library:
	
	  To finish installing the BAO Europe scenery, use the scenery library in
	  Microsoft Flight Simulator for Windows 95.
	
	  1. Start Flight Simulator. From the World Menu, click Scenery Library. You
	     will receive a warning message, click OK.
	
	  2. To display the Scenery Areas dialog box, click the Files button.
	
	  3. Click the Search button. In the Scenery Area Search dialog box, select the
	     drive letter where you installed Flight Simulator, and click on the Search
	     Drive button.
	
	  4. When the search is complete, click the Next Path button until you see the
	     Europe1 folder you created.
	
	  5. Type "Europe 1" (without the quotation marks) in the Scenery Area Title
	     area and select Local as the Scenery Area type.
	
	  6. Click the Scenery Area Active button, and then click the Add All Files In
	     Path button.
	
	  7. Click Close. Europe 1 should now be available.
	
	  8. A patch for the BAO Europe 1 and Europe 2 programs is available online.
	     This patch is NOT available from Microsoft, but it is available from
	     Apollo Software. It can be found on CompuServe in the Fsforum and Simgames
	     Forums. The file name is e1e2w95.zip.
	
	     NOTE: Do not install the Las Vegas or Washington DC scenery packages. They
	     have been incorporated into the Flight Simulator for Windows 95 program
	     and will run automatically during the setup of Flight Simulator.
	
	3rd Party Scenery Products
	--------------------------
	
	Scenery products for previous versions of Flight Simulator that were not created
	by Microsoft or BAO may have special requirements for setup in Flight Simulator
	for Windows 95. You should contact the manufacturer of that scenery package for
	any special instructions.
	
	Scenery products for previous versions of Flight Simulator that do not have a
	setup program may require that files be copied to certain folders before they
	are viewable in Flight Simulator for Windows 95.
	
	The basic format for scenery with no setup:
	
	1. In My Computer or Windows Explorer, open the Fltsim\Scenery folder. In the
	  File menu, point to New, and then click Folder. When the new folder appears
	  with a temporary name, type the name of the scenery area you wish to add. You
	  should now have a new folder in your Fltsim\Scenery folder with the new
	  scenery area name.
	
	2. In My Computer or Windows Explorer, open the Fltsim\Scenery\<New Folder
	  Name> folder. Create two new folders within the new scenery area folder,
	  and name one Scenery and the other Texture.
	
	3. From the new scenery, copy all the Scenery files to the new Scenery folder.
	  Copy all the Texture files to the new Texture folder.
	
	4. Start Flight Simulator. From the World Menu, click Scenery Library. You will
	  receive a warning message, click OK.
	
	5. To display the Scenery Areas dialog box, click the Files button.
	
	6. Click the Search button. In the Scenery Area Search dialog box, select the
	  drive letter where you installed Flight Simulator, and click on the Search
	  Drive button.
	
	7. When the search is complete, click the Next Path button until you see the
	  name of the new scenery folder you created.
	
	8. Type the new folder name in the Scenery Area Title area and select Local as
	  the Scenery Area type.
	
	9. Click the Scenery Area Active button, and then click the Add All Files In
	  Path button.
	
	10. Click Close. The new scenery area should now be available.
	
	Microsoft makes no guarantees that any 3rd party scenery will work correctly in
	Flight Simulator for Windows 95. The steps outlined above are intended as
	guidelines only. For best results contact the manufacturer of the scenery area.
	
	Additional query words: fs6 fs95 scenery install setup Paris NY Caribbean europe1 europe2
	
	======================================================================
	Keywords          : kb3rdparty kbusage kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
