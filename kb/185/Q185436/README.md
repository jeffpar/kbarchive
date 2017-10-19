---
layout: page
title: "Q185436: Using Excel and SNACFG to Implement Batch Configuration Changes"
permalink: /kb/185/Q185436/
---

## Q185436: Using Excel and SNACFG to Implement Batch Configuration Changes

	Article: Q185436
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Snacfg.exe is a command-line tool used for adding the different SNA components
	found in the SNA Manager screen. A single SNA component can be added from each
	command line execution, or a command file can be created for adding multiple
	components to the SNA configuration file (Com.cfg). This can become tedious for
	adding hundreds of the same component; that is, 3270 LUs or connections. The
	necessity for changing a component parameter to be unique can make using a
	Snacfg.exe a tedious exercise.
	
	By using Microsoft Excel, a single parameter can be typed and incremented easily
	by parsing the data and dragging down the cells. The steps below will walk
	through a scenario adding 3270 Display LU Sessions.
	
	1. Create a single Snacfg.exe statement for adding the component you need in
	  Notepad. Save the file as a text file with a .bat extension. Below is the
	  statement for adding a 3270 Display LU to the SNA Server.
	
	  snacfg #C:\sna\system\config\com.cfg lu DSPLU022 /add /connection:CONN1
	  /lunumber:22 /lutype:display
	
	  NOTE: This statement modifies the Com.cfg file on C:\Sna\System\Config and
	  adds an LU named "DSPLU022" to a connection "CONN1," gives "DSPLU022" an LU
	  number of 22, and makes it a display LU. If you are using this snacfg command
	  line, the parameters specified must match the SNA Server configuration being
	  modified. For example, if the above LU was added to a connection called
	  HostTX, then the parameter /connection:HostTX should be used instead of
	  /connection:CONN1. For more information on using the Snacfg.exe command, go
	  to the SNA Server Help files through SNA Manager or reference Part 5 of the
	  "SNA Server Reference Guide."
	
	2. The snacfg command above will appear as a single line of text in Notepad.
	
	3. Copy the line by highlighting the text and then clicking Copy from the Edit
	  menu.
	
	4. Start Excel, select cell A1, and from the Edit menu, click Paste to paste the
	  snacfg command into the first cell on the spreadsheet.
	
	5. From the Data menu, select Text to Columns. This will start the Convert Text
	  to Columns Wizard. Select the Delimited option for Original data type, and
	  then click Next to continue.
	
	6. Step 2 of the wizard allows adjustment of the columns so that each field can
	  be put into a cell. Any component that needs to be unique or numerically
	  incremented needs to be in its own cell or column. In the snacfg command line
	  example above, both the "lu DSPLU022" and the "/lunumber:22" parameters must
	  be in their own individual cells because each LU name and LU number must be
	  unique.
	
	7. Step 3 of the wizard allows the data format to be set for each column. Select
	  General in the Column data format section, and then click Next. Click Finish
	  to complete to conversion of text to columns.
	
	8. The snacfg command should appear parsed into separate columns for each of the
	  values above.
	
	9. Right-click the row number that contains the snacfg command and click copy.
	
	10. Select the next four rows, right-click the rows, and then click Paste. The
	  snacfg command line should be replicated in the four additional rows. Notice
	  that none of the parameters have incremented in value.
	
	11. The "lu" and the "/lunumber:" parameters must be incremented by a value of
	  one for each row. Click the lower-right corner of the first column to be
	  incremented and drag down four rows. Repeat this for both the "lu" and the
	  "/lunumber:" parameters. DSPLU022 will have incremented from to DSPLU023...
	  and the "/lunumber parameter" will have incremented from /lunumber:22 to
	  /lunumber:23. In this manner you can increment any column so that a unique
	  parameter is entered.
	
	  NOTE: These steps can be followed on most parameters of the snacfg command
	  line. One exception of this is adding connections. If you are adding
	  multiple connections with either a different Local SAP or Remote SAP value,
	  these must be incremented in values of hex 0x04 each time. Therefore, these
	  must be changed individually.
	
	12. After the Excel spreadsheet has been completed, highlight the block of
	  snacfg command lines and copy them into Notepad using a cut and paste
	  operation. Save the file as a text file, such as Snachange.txt.
	
	13. Create a batch file in notepad called Snabat.bat, and add the following
	  line:
	
	  "snacfg #C:\sna\system\config\com.cfg @c:\snachange.txt /v" (without the
	  quotation marks)
	
	  NOTE: The above snacfg command line modifies the com.cfg file located in the
	  C:\Sna\System\Config directory with the name of the command file created in
	  step 12 and displays information on the changes in verbose mode [/v]. These
	  parameters will need to be adjusted to reflect the location of the com.cfg
	  if it is in a different location and/or the name and location of the command
	  file. The proper syntax for this is:
	
	  snacfg [#configpath] @commandpath [/v]
	
	14. Run the Snabat.bat file from a command line. The Com.cfg file will be
	  modified with the snacfg lines in the command file created in step 12 and
	  these changes will show up in the SNA Manager once refreshed or re- opened.
	  In the above scenario, clicking on the "CONN1" connection should show the
	  3270 Display LUs on the right side of the screen. NOTE: It would be best to
	  test a single snacfg command and verify that it works before running a large
	  configuration file change. This will avoid having to do multiple
	  reconfiguration and tweaking of the command file.
	
	Additional query words: snacfg batch excel
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
