---
layout: page
title: "Q130085: Details of the .VCX File Architecture"
permalink: kb/130/Q130085/
---

## Q130085: Details of the .VCX File Architecture

	Article: Q130085
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create classes in Visual FoxPro in a program or in the visual interface.
	Using the Class Designer to create classes visually produces a table with a .VCX
	extension. Although it is not necessary to understand the ways in which the .VCX
	tables store metadata, many developers have reasons for wanting to read and
	write to these tables. This article shows and explains the file architecture of
	a .VCX table.
	
	MORE INFORMATION
	================
	
	The VCX table contains information about the objects in classes.
	
	Field Name  Type  Example            Definition
	-------------------------------------------------------------------------
	Platform    C(8)  WINDOWS            Associates a specific platform
	                                    for an object. In single-platform
	                                    tables, every object has one record
	                                    per platform. Cross-platform objects
	                                    have one record per platform with the
	                                    same UniqueID and are distinguished by
	                                    the Platform field. For records that
	                                    do not relate to a specific class or
	                                    object, the Platform field contains
	                                    the string "COMMENT." The header
	                                    record (record #1) has UniqueID =
	                                    Class.
	
	UniqueID    C(10) _ QYB0RAW20        Gives unique ID code for individual
	                                    classes and objects. Related
	                                    cross-platform records share the same
	                                    UniqueID value. For records that do
	                                    not relate to a specific class or
	                                    object, the UniqueID field contains
	                                    information that describes the type
	                                    of record. The header record
	                                    (record #1) has UniqueID = "Class."
	
	TimeStamp   N(10) 495748740          Relates directly to the date and time
	                                    the object symbols were created or
	                                    last generated. The TimeStamp field
	                                    for all records associated with a
	                                    class are updated whenever the class
	                                    is changed. For records that do not
	                                    relate to a specific class or object,
	                                    TimeStamp=0.
	
	Class       Memo  mycommandbutton    Defines which class is used to create
	                                    the subclass of the class or object
	                                    member.
	
	ClassLoc    Memo  tsbase.vcx         Gives relative path and filename of
	                                    class defined in the Class field. If
	                                    the Class field specifies a Visual
	                                    FoxPro built-in base class or the
	                                    Class name specified is located in the
	                                    same VCX, then the ClassLoc field is
	                                    empty.
	
	BaseClass   Memo  commandbutton      Stores the name of the base class, or
	                                    topmost parent class in the class tree
	                                    hierarchy, of the class or object
	                                    member.
	
	ObjName     Memo  cmdCancel          Defines the name of the class or
	                                    object member.
	
	Parent      Memo  form1              References the immediate parent
	                                    container object that the object is a
	                                    member of. If an object member is not
	                                    a child member of a container, the
	                                    Parent field is empty.
	
	Properties  Memo  Height=22          Lists properties and their set values
	                 Width=69           that override the values defined in
	                 FontSize=8         the parent class from which a class or
	                 Caption="Cancel"   object member is derived.
	                 Name="cmdcancel"
	
	Protected   Memo  cAliasdUpdated     Lists all properties and methods that
	                                    are marked as protected members for a
	                                    class.
	
	Methods     Memo  PROCEDURE Click    Contains all snippet code of a class
	                 thisform.Release() or object member.
	                 ENDPROC
	
	ObjCode     Memo                     Stores the compiled p-code of source
	                                    code stored in the Methods field.
	                                    ObjCode is empty if the Methods field
	                                    is empty.
	
	Ole         Memo                     Stores binary information for OLE
	                                    class and object members.
	
	Ole2        Memo                     Stores binary information for OLE
	                                    class and object members.
	
	Reserved1   Memo  Class              Uses Class tag field to indicate the
	                                    start of a class definition by storing
	                                    the string "Class." If a record is not
	                                    the start of a class definition, the
	                                    Reserved1 field is empty.
	
	Reserved2   Memo  2                  Stores the number of records
	                                    associated with a class, including the
	                                    class or container record. This field
	                                    only contains a value for the first
	                                    record of a class definition. If a
	                                    class doesn't contain any object
	                                    members, the Reserved2 field for the
	                                    record that starts the class
	                                    definition contains a 1. For records
	                                    that are not the start of a class
	                                    definition, the Reserved2 field is
	                                    empty.
	
	Reserved3   Memo  cAlias             Lists all user-defined member names of
	                 nResultd           a class with the member description
	                 Updated            separated by a single space character.
	                 cMyProperty        One member is stored with its
	                 ^aNames[5]         description per memo line. Standard
	                 ^aMyArray[100]     property names are listed without a
	                 *Print             preceding character, array properties
	                 *SortNames         are preceded with a caret (^), and
	                 *MyMethod          method names are preceded with an
	                                    asterisk (*).
	
	Reserved4   Memo  bmps\cancel.bmp    Stores the relative path and filename
	                                    of the bitmap (.BMP) of a custom class
	                                    icon.
	
	Reserved5   Memo  bmps\cancel.bmp    Stores the relative path and filename
	                                    of the bitmap (.BMP) for a custom
	                                    Project Manager and Class Browser
	                                    class icon.
	
	Reserved6   Memo  Pixels             Stores scalemode (Pixels/Foxels) of a
	                                    class or object.
	
	Reserved7   Memo  This class         Stores a class description that can be
	                 releases the       modified within the Class Info...
	                 form               dialog of the Class Designer.
	
	Reserved8   Memo  ..\vfp\FoxPro.h    Stores the relative path and filename
	                                    of the #INCLUDE file for all snippets.
	
	User        Memo                     Remains open for user-defined
	                                    purposes.
	
	REFERENCES
	==========
	
	Information in this article was obtained from "Visual FoxPro's VCX and SCX
	Architectures" by Ken Levy in the March 1995 issue of FoxTalk.
	
	Additional query words: structure architecture VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
