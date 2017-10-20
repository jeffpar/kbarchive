---
layout: page
title: "Q183739: XADM: Identifying and Removing Large Numbers of Orphaned Objects"
permalink: /kb/183/Q183739/
---

## Q183739: XADM: Identifying and Removing Large Numbers of Orphaned Objects

{% raw %}

	Article: Q183739
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a semi-automated method for comparing two large global
	address lists from different sites to determine which objects are orphans, and
	then to delete those orphaned objects. There are several ways to remove orphaned
	objects depending on the situation and the number of orphaned objects involved.
	For a description of orphaned objects and how to deal with one or two orphans,
	please see the following Microsoft Knowledge Base article:
	
	  Q152614 XADM: Removing Objects Whose Tombstone Expired Before DirRep
	
	For a more thorough discussion of how orphaned objects are created, including
	several options for dealing with them, please see the following Microsoft
	Knowledge Base article:
	
	  Q179573 XADM: Orphaned Objects and Exchange Server Directory
	
	Article Q179573 is useful if the number of orphaned objects make it impractical
	to deal with them one at a time and if removing and recreating the Directory
	Replication connector between sites is not an option, as would be the case in
	extremely large organizations with large global address lists, slow links, and
	many orphaned objects.
	
	MORE INFORMATION
	================
	
	It is possible to have mailboxes, custom recipients, or other objects in one
	site that no longer exist in the site where they were created. These are called
	orphaned objects. More common ways that orphaned objects are created include the
	following:
	
	- Changing the Tombstone lifetime to an interval that is shorter than the
	  amount of time it takes to replicate that tombstone throughout the
	  organization.
	
	- Using MTACheck to delete replication messages, and then the Tombstone message
	  never replicates to some other site.
	
	If there is a large number of orphaned objects, the reason for the orphaned
	objects should be determined, and the issue resolved before beginning this
	process; otherwise, it will not fix the problem.
	
	One way to rid the organization of these orphaned objects, is to recreate the
	objects in their original site/server/container and then make enough changes to
	the object so that the newest version of that object replicates to the site
	where it is orphaned. Then the object can be deleted in the original site and
	the delete can be replicated out properly. That is the approach that this
	article takes.
	
	Overview
	--------
	
	First, assume that site 1 has orphaned objects. The global address lists from
	site 1 and site 2 need to be exported into CSV files and compared. The names
	that appear in the global address list from site 1, but not in the global
	address list from site 2, are saved into a new CSV file. This is done by
	exporting the global address lists with the Exchange Administrator program and
	loading them into Access 97. You then need to do the comparison and save the
	results in an Excel 97 spreadsheet. Modify the list and save it to two separate
	CSV files, one to create the objects and one to delete them. Finally, the first
	CSV file is played into site 2 multiple times to create the objects and then
	increase the object-version numbers. Once that has replicated, the second CSV
	file is played into site 2 one time to do the delete.
	
	If a different version of Access or Excel is used other than Access 97 and Excel
	97, the steps may be slightly different, but the concept is the same.
	
	Detailed Steps
	--------------
	
	First get exports of the global address lists from Site 1 and Site 2
	
	1. Perform a Tools/Directory export of the entire global address list on both
	  sites. It is best to do this with a predefined header file. The last header
	  should be "Object-Version." If you are unfamiliar with exporting to CSV
	  files, try the following:
	
	  a. From the Exchange Administrator program, select Directory Export from the
	     Tools menu.
	
	  b. Set it to export to a file that does not exist, for example, Test.CSV. It
	     will create Test.CSV in the directory that you specified and export the
	     mailboxes.
	
	  c. Then use Excel to look at the Test.CSV file. You will see that the first
	     row is all headers. There should be 13 headers with the last column
	     reading "Hide from AB."
	
	  d. Select rows 2 through the end of the file, and delete them so that you
	     only have the first row, which is the headers.
	
	  e. Then go to column N (the 14th column right after "Hide from AB") and enter
	     "Object-Version."
	
	  f. From the File menu, select Save As and save the file as a CSV type named
	     GAL1. Save it again the same way with the name GAL2.
	
	  g. Close Excel and do NOT save the file in Excel format.
	
	  h. Finally, use the Exchange Administrator program and export the mailboxes,
	     custom recipients, and distribution lists to the GAL1 file or GAL2 file,
	     depending on your site. Then go to the other site and export to the other
	     file.
	
	2. Next import the global address lists into Access. To do this, create a table
	  definition before doing the import to prevent truncation errors with
	  particularly large fields. The text field size defaults to 50 characters,
	  which may not be large enough for some fields, particularly the "Email
	  addresses" and "Members" fields, which are defined as Memo fields. If the
	  fields are not declared as Memo fields, the records that exceed the 50
	  character limit will register an error in a third table that is generated by
	  Access.
	
	3. Use Access to generate a new database.
	
	4. In the new database, design a table named GAL1 with fields that match the
	  fields exported.
	
	  Assuming the global address lists were exported based on the directions in
	  step 1, the fields will be as follows:
	
	     OBJ-CLASS                        Text
	     First Name                       Text
	     Last Name                        Text
	     Display Name                     Text
	     Alias Name                       Text
	     Directory Name                   Text
	     Primary Windows NT Account       Text
	     Home server                      Text
	     E-mail Address                   Text
	     E-mail Addresses                 Memo
	     Members                          Memo
	     OBJ-CONTAINER                    Text
	     Hide from ab                     Text
	     Object-Version                   Text
	
	
	  Otherwise, match the fields in the table with the fields in the CSV. Any field
	  that has data exceeding 50 characters should be set to Memo.
	
	5. Copy the design (by selecting "Structure Only" when pasting) to a second
	  table called GAL2.
	
	6. From the main menu, select File and choose Get External Data and then Import.
	
	7. In the window, under Files of Type, select "Text (csv,...)" and choose the
	  first exported global address list.
	
	8. In the Import Wizard, on the first screen, leave the default format as
	  "Delimited" and click Next.
	
	9. On the second screen, leave "Comma" as the delimiter, and check the First Row
	  Contains Field Names box to enable it. Set the Text qualifier to the double
	  quote (") character and click Next.
	
	10. On the third screen, select "In an existing Table" and select GAL1 from the
	  drop down list.
	
	11. On the last screen, leave the "Import to Table" as the default and click
	  Finish.
	
	12. Repeat steps 5 through 10, using the second exported global address list and
	  the GAL2 table.
	
	13. On the Queries tab in the Access database, click the New button, select
	  design view, and add the tables GAL1 and GAL2. Close the Show Table window.
	
	14. In the top half of the Select Query window, you should see two windows, GAL1
	  and GAL2. Position the scroll bars so that you can see the Directory Name
	  field in both windows, and then click and drag the Directory Name field from
	  the GAL1 window and drop it in the Directory Name field in the GAL2 window.
	  A line should now be joining the two fields.
	
	15. Right click on the center of the adjoining line and select "Join
	  Properties." In the Join Properties window, select option 2, which says,
	  "Include all records from 'GAL1' and only those records...."
	
	16. Perform steps 14 and 15 with the OBJ-CONTAINER field.
	
	17. Drag the OBJ-CONTAINER field from the GAL2 window to the first column in the
	  table below. Uncheck the Show button. Enter "Is Null" in the Criteria row.
	
	18. Repeat Step 17 with the Directory Name field from GAL2 into the second
	  column.
	
	19. Select all of the fields from GAL1 except the "*" "E-Mail Addresses," and
	  "Members" fields, and drag them into the table. They should default to
	  having the Show row checked.
	
	20. Select Query/Make-Table query... from the main menu.
	
	21. Give it a Table name of "Records in GAL1 but not in GAL2" and click OK.
	
	22. Close and save the query.
	
	23. Open the query. It will create the new table listed in step 21.
	
	24. Open the new table.
	
	25. From the File menu, select Save as and choose Export.
	
	26. Save the table to an external file.
	
	27. Make the save type "Microsoft Excel 97" and save it as "Records in GAL1 but
	  not in GAL2.xls"
	
	28. Use Excel to open the "Records in GAL1 but not in GAL2.xls" file.
	
	  WARNING: This should now be the list of orphaned objects in GAL1. Note that
	  any objects that were recently created in GAL1 or a site that it replicates
	  to which have not yet replicated to GAL2 will also be in this list. It is
	  very important that this list is reviewed. Remove any line that has an
	  object that is still valid and verify that every object in this list is to
	  be deleted.
	
	29. Search through the Object-Version column and note the highest value. If the
	  Object-Version field was never exported, this value can be checked by hand
	  through the Administrator program in RAW mode. Select a sampling of the
	  orphaned objects and look at the values of the Object- Version for each.
	  From that sample, make a reasonable estimate as to the highest value for all
	  of them.
	
	30. Guarantee that the last column has data in it. If it does not, move the
	  OBJ-Container column so it is the last column. If this step is skipped, you
	  will get an error during import that the number of fields did not match the
	  number of headers.
	
	31. From the File menu, select Save As and save it as a CSV file named
	  "Add2GAL2.CSV."
	
	32. Insert a new column B. This should be right after the Object Class column.
	  Name the column "MODE," and populate every record with the word "Delete" in
	  this column.
	
	33. From the File menu, select Save As and save it as a CSV file named
	  "DelGAL2.CSV."
	
	34. Close any open Excel files and do NOT save any of them in Excel format if
	  prompted.
	
	35. Use an editor like Notepad to create an "Add2Gal2.BAT" file. Enter the
	  following and save the file:
	
	        start /wait admin /i Add2Gal2.csv
	        start /wait admin /i Add2Gal2.csv
	        .
	        .
	        .
	        start /wait admin /i Add2Gal2.csv
	    
	
	  Determining how many admin /i commands is based on the object-version numbers
	  of the orphaned objects. You want at least one more command than the highest
	  version number as noted in step 29. Each time the admin /i command is run,
	  the object-version number will increase by one on the object. The goal is to
	  create the object on GAL2 and make it's object- version number higher than
	  that of the same object that already exists in GAL1.
	
	36. Place the "Add2Gal2.CSV" file and the "Add2Gal2.BAT" files in the
	  Exchsrvr\Bin directory on Machine2.
	
	37. Run the Add2Gal2 batch file.
	
	38. You should now see the objects in the GAL2 on Machine2 and the Object-
	  Version number should equal the number of times the import command was
	  entered in the batch file in Step 35.
	
	39. Replicate the GAL from Site 2 to Site 1 and verify that the Object- Version
	  numbers on Site 1 now match those on site 2 for a sample set.
	
	40. From the command prompt in the Exchsrvr\Bin directory on the server in Site
	  2, run the command: admin /i DelGal2.csv
	
	41. The objects should be deleted from GAL2. Replicate the GAL from Site 2 to
	  Site 1.
	  BR/> If some of the objects are not deleted, check their Object-Version
	  numbers in the GAL in Site 1. If they are higher than the number used in
	  step 35, then this process will need to be repeated from Step 1 with the
	  reduced set of orphaned objects. Otherwise, if there are only a couple of
	  orphaned objects, follow the steps for manually removing orphaned object as
	  described in the Knowledge Base article Q179573, Orphaned Objects and
	  Exchange Server Directory."
	
	Additional query words: detect
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
