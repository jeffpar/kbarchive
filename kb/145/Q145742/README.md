---
layout: page
title: "Q145742: File Structure and Contents of .VCX and .SCX Files"
permalink: kb/145/Q145742/
---

## Q145742: File Structure and Contents of .VCX and .SCX Files

	Article: Q145742
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may sometimes need to change the contents of a .vcx or .scx record to allow
	a form to run correctly or to modify a Class library to allow editing. This
	article explains the file structure of the table that contains the .vcx or .scx
	information and gives a description of the usage and examples of the field
	contents.
	
	MORE INFORMATION
	================
	
	Field Name: Platform
	Type: C(8)
	Description: VCX/SCX - Used to associate a Specific platform for an object. In
	single-platform tables, every object has one record per platform. Cross-
	platform objects have one record per platform with the same UniqueID and are
	distinguished by the Platform Field. For records that do not relate to a
	specific class or object, the Platform field contains the string "COMMENT". The
	header record (record #1) has Platform="COMMENT".
	
	Example: "WINDOWS"
	===============================================================================
	Field Name: UniqueID
	Type: C(10)
	Description: VCX/SCX - Unique ID code for individual classes and objects. Related
	cross-platform records share the same UniqueID value. For records that do not
	relate to a specific class or object, the UniqueID field contains information
	that describes the type of record. The header record (record #1) has
	Unique="Class". SCX - Same as VCX except the header record (record #1) has
	uniqueID="Screen".
	
	Example: "_QVW1055YU"
	===============================================================================
	Field Name: TimeStamp
	Type: N(10)
	Description: VCX/SCX - This timestamp code relates directly to the date and time
	the object symbols were created or last generated. The TimeStamp field for all
	records associated with a class are updated whenever the class is changed. For
	records that do not relate to a specific class or object, TimeStamp=0.
	
	Example: 495748740
	===============================================================================
	Field Name: Class
	Type: Memo
	Description: VCX/SCX - Defines which class is used to create the subclass of the
	class or object member.
	
	Example: "MyCommandButton"
	===============================================================================
	Field Name: ClassLoc
	Type: Memo
	Description: VCX/SCX - Relative path and filename of the class defined in the
	Class field. If the Class field specifies a Visual FoxPro built-in base class or
	the Class name specified is located in the same VCX, then the ClassLoc field is
	empty.
	
	Example: "Tsbase.vcx"
	===============================================================================
	Field Name: BaseClass
	Type: Memo
	Description: VCX/SCX - Stores the name of the base class, or top-most parent
	class in the class tree hierarchy, of class or object member.
	
	Example: "CommandButton"
	===============================================================================
	Field Name: ObjName
	Type: Memo
	Description: VCX/SCX - Defines the name of class or object member.
	
	Example: "CmdCancel"
	===============================================================================
	Field Name: Parent
	Type: Memo
	Description: VCX/SCX - References the immediate parent container object of which
	the object is a member. If an object member is not a child member of a
	container, the Parent field is empty.
	
	Example: "Form1"
	===============================================================================
	Field type: Properties
	Type: Memo
	Description: VCX/SCX - Lists properties and their values that override the values
	defined in the parent class from which a class or object member is derived.
	
	Example: "Width = 69" "Height = 10"
	===============================================================================
	Field Name: Protected
	Type: Memo
	Description: VCX/SCX - Lists all properties and methods that are marked as
	protected members for a class.
	
	Example: "dUpdated"
	===============================================================================
	Field Name: Methods
	Type: Memo
	Description: VCX/SCX - Contains all snippet code of a class or object member.
	
	Example: "Procedure Click"
	"ThisForm.Release()
	"EndProcedure"
	===============================================================================
	Field Name: ObjCode
	Type: Memo
	Description: VCX/SCX - Stores the compiled p-code of source code stored in the
	Methods field. The ObjCode is empty if the Methods field is empty.
	
	Example: None
	===============================================================================
	Field Name: Ole
	Type: Memo
	Description: VCX/SCX - Stores binary information for OLE class and object
	members.
	
	Example: None
	===============================================================================
	Field Name: Ole2
	Type: Memo
	Description: VCX/SCX - Stores binary information for OLE class and object
	members.
	
	Example: None
	===============================================================================
	Field Name: Reservedl
	type: Memo
	Description: VCX - Class tag field used to indicate the start of a class
	definition by storing the string "Class". If a record is not the start of a
	class definition, the Reservedl field is empty. SCX - Not used.
	
	Example: None
	===============================================================================
	Field Name: Reserved2
	Type: Memo
	Description: VCX/SCX - Stores the number of records associated with a class
	including the class or container record. This field only contains a value for
	the first record of a class definition. If a class does not contain any object
	members, the Reserved2 field for the record that starts the class definition
	contains a 1. For records that are not the start of a class definition, the
	Reserved2 field is empty.
	
	Example: 2
	===============================================================================
	Field Name: Reserved3
	Type: Memo
	Description: VCX - Lists all user-defined member names of a class with the member
	description separated by a single space character. One member is stored with its
	description per memo line. Standard property names are listed without a
	preceding character, while array properties are preceded with an asterisk (*)
	character. SCX - Not used.
	
	Example: "^Myarray(100)"
	===============================================================================
	Field Name: Reserved4
	Type: Memo
	Description: VCX - Stores the relative path and filename of the bitmap (BMP) of a
	custom class icon. SCX - Not used.
	
	Example: "c:\vfp\samples\bitmaps\cancel.bmp"
	===============================================================================
	Field Name: Reserved5
	Type: Memo
	Description: VCX - Stores the relative path and filename of the bitmap (.bmp
	file) for a custom Project Manager and Class Browser class icon. SCX - Not
	used.
	
	Example: "c:\vfp\samples\bitmaps\cancel.bmp"
	===============================================================================
	Field Name: Reserved6
	Type: Memo
	Description: VCX/SCX - Stores scalemode (Pixels/Foxels)Pixels of a class or
	object.
	
	Example: "Pixels"
	===============================================================================
	Field Name: Reserved7
	Type: Memo
	Description: VCX/SCX - Stores class description that can be modified within the
	Class Info dialog of the Class Designer.
	
	Example: "This class releases the form."
	===============================================================================
	Field Name: Reserved8
	Type: Memo
	Description: VCX/SCX- For classes, stores the relative path and file name of the
	#INCLUDE file for all code snippets. For object members, stores the string
	"NOINIT" if an object has NoInit check box marked in the Class Info dialog of
	the Class Designer.
	
	Example: "NOINIT"
	===============================================================================
	Field Name: User
	Type: Memo
	Description: VCX/SCX - Open for user-defined purposes.
	
	Example: None
	===============================================================================
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
